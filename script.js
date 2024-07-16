function Zoom() {
    const modal = document.getElementById('modal');

    if (modal.className.indexOf("modalDisplay") == - 1) {
        modal.className += " modalDisplay";
        console.log("if")
    } else {
        modal.className = modal.className.replace(" modalDisplay", "");
        console.log("else")
    }
}