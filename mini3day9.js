
  let timerDisplay = document.getElementById("timerDisplay");
        let startButton = document.getElementById("startButton");
        let stopButton = document.getElementById("stopButton");
        let resetButton = document.getElementById("resetButton");

        let seconds = 96;
        let intervalid = null;

        function updateTimerDisplay() {
            timerDisplay.innerText = seconds;
        }
        function startTimer() {
            if (intervalid === null) {
                intervalid = setInterval(() => {
                    seconds++;
                    updateTimerDisplay();
                }, 1000);
            }
        }
        function stopTimer() {
            clearInterval(intervalid);
            intervalid = null;
        }
        function resetTimer() {
            stopTimer();
            seconds = 0;
            updateTimerDisplay();
        }
        startButton.addEventListener("click", startTimer);
        stopButton.addEventListener("click", stopTimer);
        resetButton.addEventListener("click", resetTimer);