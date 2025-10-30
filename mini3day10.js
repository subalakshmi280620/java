
let count = 0;
function updateCounter() {
    document.getElementById("countdown").textContent = count;
}
document.getElementById("starttimer").addEventListener("click", () => {
    count++;
    updateCounter();
});
document.getElementById("resettimer").addEventListener("click", () => {
    count = 0;
    updateCounter();
});
updateCounter();
