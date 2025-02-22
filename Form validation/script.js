document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

function validateForm() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Regular Expressions
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Clear previous errors
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Validate email
    if (email === "") {
        emailError.textContent = "Email cannot be empty.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        passwordError.textContent = "Password cannot be empty.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
        isValid = false;
    }

    if (isValid) {
        alert("Login Successful!");
    }

    return isValid;
}
