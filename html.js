let box = document.querySelector('.box');
let currentRotation = 0;
let rotationSpeed = 0.3; 
function rotateBox() {
    currentRotation += rotationSpeed;
    box.style.transform = `perspective(1000px) rotateY(${currentRotation}deg)`;
    requestAnimationFrame(rotateBox);
}

window.addEventListener('load', rotateBox);