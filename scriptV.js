let id = (id) => document.getElementById(id);
let classes = (classes) =>
document.getElementByClassName(classes);
let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");
form.addEventListener("submit", (e) => {
e.preventDefault();
engine(username, 0, "Username cannot be blank");
engine(email, 1, "Email cannot be blank");
engine(password, 2, "Password cannot be blank");
});
let engine = (id, serial, message) => {
if (id.value.trim() === "") {
errorMsg[serial].innerHTML = message;
id.style.border = "2px solid red";
failureIcon[serial].style.opacity = "1";
successIcon[serial].style.opacity = "0";
}
else {
errorMsg[serial].innerHTML = "";
id.style.border = "2px solid green";
failureIcon[serial].style.opacity = "0";
successIcon[serial].style.opacity = "1";
}
}
let passwordValidation = (password) => {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if(password.value.length < 8) {
        return "Password must be at least 8 characters long";
    } else if(!password.value.match(lowerCaseLetters)) {
        return "Password must contain at least one lowercase letter";
    } else if(!password.value.match(upperCaseLetters)) {
        return "Password must contain at least one uppercase letter";
    } else if(!password.value.match(numbers)) {
        return "Password must contain at least one number";
    } else {
        return "";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let passwordMessage = passwordValidation(password);
    if (passwordMessage !== "") {
        engine(password, 2, passwordMessage);
    } else {
        engine(username, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(password, 2, "Password cannot be blank");
    }
});
