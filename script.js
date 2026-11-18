const form = document.getElementById("contact_form");
const formStatus = document.getElementById("form-status");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (message.value.trim() == "") {
        formStatus.textContent = "Please write a message before sending.";
        return;
    }
    
    formStatus.textContent = "Thank you, your message has been sent.";
    form.reset();
});