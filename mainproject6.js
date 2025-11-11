const body = document.body;
const toggleBtn = document.getElementById("toggleBtn");

// Load saved theme
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "Switch to Light Mode";
    }
};

// Toggle Theme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "Switch to Dark Mode";
    }
});