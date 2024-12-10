
let confirmPassword = id("confirm-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    validatePassword(password, 2, "Password cannot be blank");
    engine(confirmPassword, 3, "Confirm Password cannot be blank");
    validateConfirmPassword(password, confirmPassword, 3, "Passwords do not match");
});

let validatePassword = (id, serial, message) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else if (!passwordPattern.test(id.value.trim())) {
        errorMsg[serial].innerHTML = "Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one number";
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

let validateConfirmPassword = (password, confirmPassword, serial, message) => {
    if (confirmPassword.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        confirmPassword.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        errorMsg[serial].innerHTML = "Passwords do not match";
        confirmPassword.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        confirmPassword.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}
