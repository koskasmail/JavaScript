
function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthText = document.getElementById("strengthText");

    // Define the criteria for a strong password
    var minLength = 8;
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var hasSpecialChar = /[!@#$%^&*()_+{}|:"<>?~`[\]\\;',./\-]/.test(password);

    // Evaluate the password strength
    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        strengthText.textContent = "Strong password";
        strengthText.style.color = "green";
    } else {
        strengthText.textContent = "Weak password";
        strengthText.style.color = "red";
    }
}
