let interval; 

document.getElementById('startBtn').addEventListener('click', function () {
    let timeInput = document.getElementById('timeInput').value;
    let countdownDisplay = document.getElementById('countdownDisplay');
    
    if (timeInput > 60 || timeInput <= 0) {
        alert('Please enter a number between 1 and 60.');
        return;
    }

    countdownDisplay.innerHTML = `Time remaining: ${timeInput}`;

    let interval = setInterval(function () {
        timeInput--;
        countdownDisplay.innerHTML = `Time remaining: ${timeInput}`;

        if (timeInput <= 0) {
            clearInterval(interval);
            alert('Time up!');
        }
    }, 1000);
});

document.getElementById('resetBtn').addEventListener('click', function () {
    clearInterval(interval);  // Clear the countdown interval
    document.getElementById('timeInput').value = '';  // Clear the input field
    document.getElementById('countdownDisplay').innerHTML = 'Time left: 0';  // Reset display
});