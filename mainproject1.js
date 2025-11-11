// Load chat history on page load
window.onload = () => {
    loadMessages();
};

// Send a new message
function sendMessage() {
    let text = document.getElementById("messageInput").value.trim();
    if (!text) return;

    let messageObj = {
        type: 'sent',
        text: text,
        time: new Date().toLocaleTimeString()
    };

    saveMessage(messageObj);
    displayMessage(messageObj);

    document.getElementById("messageInput").value = "";
}

// Store message in LocalStorage
function saveMessage(msg) {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(msg);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

// Load messages from LocalStorage
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.forEach(msg => displayMessage(msg));
}

// Display message in chat window
function displayMessage(msg) {
    let box = document.createElement("div");
    box.className = "msg " + msg.type;
    box.innerHTML = `
            ${msg.text}
            <span class="timestamp">${msg.time}</span>
        `;
    document.getElementById("chatMessages").appendChild(box);

    // auto scroll bottom
    document.getElementById("chatMessages").scrollTop =
        document.getElementById("chatMessages").scrollHeight;
}

// Simulate a received message every 5 seconds (optional)
setInterval(() => {
    let reply = {
        type: 'received',
        text: "This is a reply!",
        time: new Date().toLocaleTimeString()
    };
    saveMessage(reply);
    displayMessage(reply);
}, 5000);