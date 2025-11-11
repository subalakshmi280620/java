const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const previewBox = document.getElementById("previewBox");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");

// Click to open file dialog
dropArea.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
    handleFile(fileInput.files[0]);
});

// Drag Over
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
});

// Drag Leave
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("dragover");
});

// Drop File
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

// Handle file preview + info + fake upload
function handleFile(file) {
    if (!file) return;

    // Show file info
    let fileInfo = `<p><strong>${file.name}</strong> (${(file.size / 1024).toFixed(2)} KB)</p>`;

    // Display image preview if image
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
            previewBox.innerHTML = `<img src="${reader.result}">` + fileInfo;
        };
        reader.readAsDataURL(file);
    } else {
        previewBox.innerHTML = fileInfo;
    }

    simulateUpload();
}

// Fake Upload Progress (0 → 100%)
function simulateUpload() {
    progressBar.style.display = "block";
    let progress = 0;

    let interval = setInterval(() => {
        progress += 10;
        progressFill.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 200);
}