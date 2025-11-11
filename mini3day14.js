let startTime = 0;
let targetSentence = "";

function startTest() {
    fetch("https://api.quotable.io/random")   // Fetch random sentence API
        .then(res => res.json())
        .then(data => {
            targetSentence = data.content;
            document.getElementById("sentenceBox").innerText = targetSentence;

            document.getElementById("inputBox").value = "";
            document.getElementById("inputBox").disabled = false;
            document.getElementById("inputBox").focus();
            document.getElementById("result").innerText = "";

            // Start timer
            startTime = new Date().getTime();

            // Listen for typing finish
            document.getElementById("inputBox").oninput = checkMatch;
        });
}

function checkMatch() {
    const typed = document.getElementById("inputBox").value;

    // Sentence completed
    if (typed === targetSentence) {
        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000; // seconds

        const wordCount = targetSentence.split(" ").length;
        const wpm = Math.round((wordCount / timeTaken) * 60);

        document.getElementById("result").innerHTML =
            `⏱ Time: <b>${timeTaken.toFixed(2)}</b> sec<br>
           📝 Words: <b>${wordCount}</b><br>
           ⚡ Typing Speed: <b>${wpm} WPM</b>`;

        document.getElementById("inputBox").disabled = true;
    }
}