// Change color of button and background on click
document.getElementById('colorSwitch').addEventListener('click', function() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    this.style.backgroundColor = randomColor;
    document.querySelector('.color-changer').style.backgroundColor = randomColor; // Changes the background of the section
});

// Display greeting based on current time
document.getElementById('greetAlert').addEventListener('click', function() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning!' : hour < 18 ? 'Good afternoon!' : 'Good evening!';
    alert(`Hello! ${greeting} Current time is ${new Date().toLocaleTimeString()}.`);
});

// Calculate and display the sum of two numbers
document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    const result = num1 + num2;
    document.querySelector('#calculationResult span').textContent = result;
});
