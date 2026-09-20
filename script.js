const year = new Date().getFullYear();
document.getElementById("current-year").textContent = year;

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const greeting=document.getElementById("greeting");
const hour=new Date().getHours();

if(hour<12){
    greeting.textContent ="Good Morning!";
}else if(hour<18){
    greeting.textContent ="Good Afternoon!";
}else{
    greeting.textContent ="Good evening!";
}

const typingText = document.getElementById("typing-text");

function startTyping() {

    const text = "Aspiring Software Developer";
    let index = 0;

    function typeText() {

        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;

            setTimeout(typeText, 100);
        }

    }

    typeText();
}

startTyping();

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been received.";
    contactForm.reset();

});