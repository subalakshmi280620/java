const API_KEY = "DEMO_KEY"; // Replace with your NASA API key

// Set default date to today
document.getElementById("datePicker").value = new Date().toISOString().slice(0, 10);

function loadAPOD() {
    const date = document.getElementById("datePicker").value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Title
            document.getElementById("title").innerText = data.title;

            // Description
            document.getElementById("description").innerText = data.explanation;

            // Show image or video
            const mediaDiv = document.getElementById("media");
            if (data.media_type === "image") {
                mediaDiv.innerHTML = `<img src="${data.url}" id="media" />`;
            } else if (data.media_type === "video") {
                mediaDiv.innerHTML = `<iframe width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
            }
        })
        .catch(err => {
            document.getElementById("title").innerText = "Error loading data.";
            document.getElementById("description").innerText = err;
        });
}

// Load today's picture on start
loadAPOD();
