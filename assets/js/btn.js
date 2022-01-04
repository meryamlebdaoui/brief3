const contact_form = document.querySelector('.form-contact-us');

contact_form.addEventListener('submit', myFunction)

function myFunction(e) {
    e.preventDefault()
    document.querySelector(".box-a").innerHTML = `
    <h3>Thank you ${e.target.firstName.value} for your message !</h3>
    <i class="close-i"></i>
    `;
    document.querySelector(".close-i").addEventListener('click', function () {
        document.querySelector(".box-a").classList.toggle("e-click");
        contact_form.addEventListener('submit', myFunction)

    })
    document.querySelector(".box-a").classList.toggle("e-click");
    setTimeout(() => {
        document.querySelector(".box-a").classList.toggle("e-click");
        contact_form.addEventListener('submit', myFunction)
    }, 4000);
    contact_form.removeEventListener('submit', myFunction)
}

function display(){
    var event = document.getElementById("nav");
    var x = window.matchMedia("(max-width: 700px)")
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