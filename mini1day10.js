let dragBox = document.getElementById("dragBox"); 
let dropZone = document.getElementById("dropZone");
dragBox.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});
dropZone.addEventListener("dragover", function (event) {
    event.preventDefault(); // Allows the drop
});
dropZone.addEventListener("drop", function (event) {
    event.preventDefault();
    let draggedElement = document.getElementById(event.dataTransfer.getData("text"));
    dropZone.appendChild(draggedElement); 
    dragBox.style.position = "static";
    dropZone.innerText = "Item Dropped Successfully!";
});