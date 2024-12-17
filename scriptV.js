let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    confirmPassword = id("confirm-password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
    validatePasswords();
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};

let validateInputs = () => {
    let passwordValue = password.value.trim();
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
        errorMsg[2].innerHTML = "Password must be at least 8 characters, and contain at least one uppercase letter, one lowercase letter, and one number.";
        password.style.border = "2px solid red";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
    }
};

let validatePasswords = () => {
    if (password.value !== confirmPassword.value) {
        errorMsg[3].innerHTML = "Passwords do not match.";
        confirmPassword.style.border = "2px solid red";
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "0";
    } else {
        errorMsg[3].innerHTML = "";
        confirmPassword.style.border = "2px solid green";
        failureIcon[3].style.opacity = "0";
        successIcon[3].style.opacity = "1";
    }
};

function sendMail() {
    var body = document.getElementById("email").value;
    window.location.href = "mailto:matthewbarisov@gmail.com?subject=Registration Confirmation&body=" + body;
}

function save() {
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("password", document.getElementById("password").value);
    window.location.href = "newPage.html"; 
}
