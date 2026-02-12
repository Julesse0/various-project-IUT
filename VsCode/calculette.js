function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;
    
    switch(operator) {
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        if(num2 != 0) {
            result = num1 / num2;
        } else {
            alert("Division par zéro n'est pas possible, idiot, je vais te mettre un 0 bien placé moi !");
            return;
        }
        break;
    }
    
    document.getElementById('result').value = result;
}

document.getElementById('num1').oninput = calculate;
document.getElementById('num2').oninput = calculate;
document.getElementById('operator').oninput = calculate;