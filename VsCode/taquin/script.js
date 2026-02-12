document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.placeholderImg');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            if (isAdjacent(image)) {
                swapImages(image);
                Move();
                if (isPuzzleSolved()) {
                    alert('Félicitations ! Vous avez résolu le puzzle.');
                }
            }
        });
    });

    function isAdjacent(image) {
        const images = document.querySelectorAll('.placeholderImg');
        const clickedIndex = Array.from(images).indexOf(image);
        const emptyIndex = Array.from(images).findIndex(img => img.src.endsWith('change.jpg'));
        const possibleIndices = [
            emptyIndex - 1,
            emptyIndex + 1,
            emptyIndex - 4,
            emptyIndex + 4
        ];
        return possibleIndices.includes(clickedIndex);
    }
    
    function swapImages(image) {
        const emptyImage = document.querySelector('.placeholderImg[src$="change.jpg"]');
        
        if (emptyImage) {
            const tempSrc = image.src;
            image.src = emptyImage.src;
            emptyImage.src = tempSrc;
        }
    }
    
    function Move() {
        const moveCountElement = document.getElementById('moveCount');
        const currentMoveCount = parseInt(moveCountElement.textContent.replace(/\D/g, '')) || 0;
        moveCountElement.textContent = 'Nombre de déplacements : ' + (currentMoveCount + 1);
    }
    

    function isPuzzleSolved() {
        const images = document.querySelectorAll('.placeholderImg');
        for (let i = 0; i < images.length - 1; i++) {
            const currentNumber = parseInt(images[i].src.split('/').pop().split('.')[0]);
            const nextNumber = parseInt(images[i + 1].src.split('/').pop().split('.')[0]);
            if (currentNumber !== nextNumber - 1) {
                return false;
            }
        }
        const lastImage = images[images.length - 1];
        return lastImage.src.endsWith('change.jpg');
    }
    
    function shuffleImages() {
        const images = document.querySelectorAll('.placeholderImg');
        const container = document.querySelector('.grid-container');
        const imagesArray = Array.from(images);
        for (let i = imagesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imagesArray[i].src, imagesArray[j].src] = [imagesArray[j].src, imagesArray[i].src];
        }
    
        imagesArray.forEach(image => container.appendChild(image));
    }

//les deux fonctions qui suivent ne fonctionnent pas comme prévu
    function solvePuzzle() {
        const images = document.querySelectorAll('.placeholderImg');
        const emptyImage = document.querySelector('.placeholderImg[src$="change.jpg"]');
        const emptyIndex = Array.from(images).indexOf(emptyImage);
    
        if (isPuzzleSolved()) {
            alert('Le puzzle est déjà résolu !');
            return;
        }
    
        for (let i = emptyIndex - 1; i >= 0; i--) {
            setTimeout(() => swapImages(images[i]), (emptyIndex - i) * 500);
        }        
    
        Move();
    
        setTimeout(() => alert('Félicitations ! Vous avez résolu le puzzle.'), (emptyIndex + 1) * 500);
    }
    
    function updateMissingMoveCount() {
        const totalMovesNeeded = calculateMovesNeeded();
        const currentMoveCount = parseInt(document.getElementById('moveCount').textContent.replace(/\D/g, '')) || 0;
        const missingMoves = totalMovesNeeded - currentMoveCount;
    
        const missingMovesElement = document.getElementById('missingMoveCount');
        missingMovesElement.textContent = 'Nombre de déplacements manquants pour le résoudre : ' + missingMoves;
    }
document.getElementById('resolveButton').addEventListener('click', solvePuzzle);

    shuffleImages();
});
