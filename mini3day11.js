 const display = document.getElementById('display');
        const startBtn = document.getElementById('start');
        const stopBtn = document.getElementById('stop');
        const resetBtn = document.getElementById('reset');

        let timerInterval;

        // Retrieve stored data
        let startTime = sessionStorage.getItem('startTime');
        let elapsedTime = parseInt(sessionStorage.getItem('elapsedTime')) || 0;
        let running = sessionStorage.getItem('running') === 'true';

        function formatTime(ms) {
            let totalSeconds = Math.floor(ms / 1000);
            let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            let seconds = String(totalSeconds % 60).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        function updateDisplay() {
            let now = Date.now();
            let timeToDisplay = elapsedTime;
            if (running) {
                timeToDisplay += now - startTime;
            }
            display.textContent = formatTime(timeToDisplay);
        }

        function startTimer() {
            if (!running) {
                running = true;
                startTime = Date.now();
                sessionStorage.setItem('startTime', startTime);
                sessionStorage.setItem('running', true);

                timerInterval = setInterval(updateDisplay, 1000);
            }
        }

        function stopTimer() {
            if (running) {
                running = false;
                elapsedTime += Date.now() - startTime;
                clearInterval(timerInterval);

                sessionStorage.setItem('elapsedTime', elapsedTime);
                sessionStorage.setItem('running', false);
            }
        }

        function resetTimer() {
            running = false;
            clearInterval(timerInterval);
            elapsedTime = 0;

            sessionStorage.removeItem('startTime');
            sessionStorage.setItem('elapsedTime', 0);
            sessionStorage.setItem('running', false);

            display.textContent = '00:00:00';
        }

        // Event listeners
        startBtn.addEventListener('click', startTimer);
        stopBtn.addEventListener('click', stopTimer);
        resetBtn.addEventListener('click', resetTimer);

        // Continue running if page refreshed
        if (running) {
            timerInterval = setInterval(updateDisplay, 1000);
        }

        // Update display initially
        updateDisplay();