const link = document.querySelector(".link-write-us");
const popup = document.querySelector(".modal-write-us");
const close = popup.querySelector(".modal-close");
const form = popup.querySelector("form");
const name = form.querySelector("[name=name]");
const email = form.querySelector("[name=email]");
const message = form.querySelector("textarea");

let isStorageSupport = true;
let storage_name = "";
let storage_email = "";

try {
    storage_name = localStorage.getItem("name");
    storage_email = localStorage.getItem("email");
}   catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    
    let hasFocus = false;

    if(storage_name) {
        name.value = storage_name;
    } else {
        name.focus();
        hasFocus = true;
    }
    
    if(storage_email) {
        email.value = storage_email;
    } else if(!hasFocus) {
        email.focus();
        hasFocus = true;
    }

    if(!hasFocus) {
        message.focus();
    } 

});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal--show")) {
            evt.preventDefault();
            popup.classList.remove("modal--show");
        }
    }    
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
        evt.preventDefault();
        alert("Нужно заполнить все поля формы");
    } else {
        if(isStorageSupport) {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
        }
    }
});