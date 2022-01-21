function display(){
    var event = document.getElementById("nav");
    var x = window.matchMedia("(max-width: 790px)")
    if (x.matches) {
        if (event.style.display == 'none') {
            event.style.display="block";
        }else {
            event.style.display = 'none';
        }
    }
}
function drop() {
    document.getElementById("nav").style.display="none";
}