var link = document.querySelector(".contact-us");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var name = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-e-mail]");
var text = popup.querySelector("[name=feedback-message]");



link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
