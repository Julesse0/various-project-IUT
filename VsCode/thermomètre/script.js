class SensorElement extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById('sensor-template');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(templateContent.cloneNode(true));
        
        this.shadowRoot.querySelector('#value').setAttribute('aria-live', 'polite');
    }

    connectedCallback() {
        this.updateValue();
        setInterval(() => {
            this.updateValue();
        }, 2000);
    }

    updateValue() {
        updateTemperature(this);
    }
}

customElements.define('sensor-element', SensorElement);

class Thermometer {
    constructor() {
        this.currentTemperatureElement = document.querySelector('sensor-element');
        this.messageElement = this.currentTemperatureElement.shadowRoot.querySelector('#message');
        this.historyElement = document.getElementById('history-tab');
        this.accountElement = document.getElementById('account');
        this.temperatureHistory = []; // Tableau pour stocker les anciennes valeurs

        document.getElementById('history-tab-button').addEventListener('click', () => {
            this.showTemperatureHistory();
        });

        setInterval(() => {
            updateTemperature(this);
            this.updateHistory();
            this.updateAccount();
        }, 2000);
    }

    updateHistory() {
        fetchData('history.json')
        .then(data => {
            this.historyElement.innerHTML = '';
            data.temperatures.forEach(temperature => {
                let temperatureElement = document.createElement('p');
                temperatureElement.textContent = temperature + "°C";
                this.historyElement.appendChild(temperatureElement);
                this.temperatureHistory.push(temperature);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération de l'historique :", error);
        });
    }

    showTemperatureHistory() {
        this.historyElement.innerHTML = '';
        this.temperatureHistory.forEach(temperature => {
            let temperatureElement = document.createElement('p');
            temperatureElement.textContent = temperature + "°C";
            this.historyElement.appendChild(temperatureElement);
        });
    }

    updateAccount() {
        fetchData('account.json')
        .then(data => {
            this.accountElement.textContent = `Nom : ${data.name}, Email : ${data.email}`;
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des informations du compte :", error);
        });
    }
}

const updateTemperature = (thermometer) => {
    fetchTemperature(thermometer);
};

const fetchTemperature = (thermometer) => {
    fetch('https://hothothot.dog/api/capteurs/exterieur')
        .then(response => response.json())
        .then(data => {
            if (data && data['capteurs'] && data['capteurs'].length > 0) {
                let temperature = data['capteurs'][0]['Valeur'];
                thermometer.currentTemperatureElement.shadowRoot.querySelector('#value').textContent = temperature + "°C";
                thermometer.currentTemperatureElement.className = getTemperatureClass(temperature);

                if (temperature < 0) {
                    addMessageAboveDisplay("Brrrrrrr, un peu froid ce matin, mets ta cagoule !");
                } else if (temperature > 30) {
                    addMessageAboveDisplay("Caliente ! Vamos a la playa, ho hoho hoho !!");
                } else {
                    removeMessageAboveDisplay();
                }

            } else {
                console.error('Données de température non définies ou non récupérées correctement.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données de température :', error);
        });
};

const addMessageAboveDisplay = (message) => {
    let messageElement = document.getElementById("temperature-message");
    if (!messageElement) {
        messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageElement.id = "temperature-message";
        messageElement.setAttribute('role', 'alert');
        messageElement.setAttribute('aria-live', 'assertive');
        document.body.insertBefore(messageElement, document.body.firstChild);
    }
};
const removeMessageAboveDisplay = () => {
    let messageElement = document.getElementById("temperature-message");
    if (messageElement) {
        document.body.removeChild(messageElement);
    }
};

const getTemperatureClass = (temperature) => {
    if (temperature <= 0) return "blue-border";
    if (temperature <= 20) return "green-border";
    if (temperature <= 30) return "orange-border";
    return "red-border";
};

const createReactionLabel = (text) => {
    let reactionLabel = document.getElementById("reaction");
    if (!reactionLabel) {
        reactionLabel = document.createElement("p");
        reactionLabel.textContent = text;
        reactionLabel.setAttribute('aria-live', 'assertive');
        reactionLabel.id = "reaction";
        document.body.appendChild(reactionLabel);
    }
};

const removeReactionLabel = () => {
    let reactionLabel = document.getElementById("reaction");
    if (reactionLabel) {
        document.body.removeChild(reactionLabel);
    }
};

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        throw error;
    }
};

window.onload = function() {
    let thermometer = new Thermometer();
};
