async function fetchDefinition() {
    let word = document.getElementById("word").value;
    let response = await
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let data = await response.json();
    if (data.title === "No Definitions Found") {
        document.getElementById("definition").innerText = "Word not found.";
        return;
    }
    document.getElementById("definition").innerText = `${data[0].word}:
${data[0].meanings[0].definitions[0].definition}`;
}
document.getElementById("getDefinition").addEventListener("click",
    fetchDefinition);