function Zoom(i) {
    const modal = document.getElementById('modal');
    const img = document.getElementById('modalImg');

    if (i == undefined) {
        modal.className = modal.className.replace(" modalDisplay", "");
        return;
    }
    
    img.src = `images/foto${i}.jpeg`;

    if (modal.className.indexOf("modalDisplay") == - 1) {
        modal.className += " modalDisplay";
        
    } else {
        modal.className = modal.className.replace(" modalDisplay", "");

    }
}