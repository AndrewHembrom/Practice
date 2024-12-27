function dragstartHandler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("box");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstartHandler);
  });

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}