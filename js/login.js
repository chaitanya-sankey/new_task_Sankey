function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Reset previous error message
    errorMessage.innerText = "";

    // Check email and password
    if (email !== "sankey901@solutions.com" && password !== "mindset"){
        errorMessage.innerText = "Invalid username and password";
        return false;
    }else if (email !== "sankey901@solutions.com") {
        errorMessage.innerText = "Invalid username/email";
        return false;
    } else if (password !== "mindset") {
        errorMessage.innerText = "Invalid password";
        return false;
    }else if (email !== "sankey901@solutions.com" && password !== "mindset"){
        errorMessage.innerText = "Invalid username and password";
        return false;
    } else {
        // Redirect to a welcome page
        window.location.href = "welcome.html";
        return true;
    }
}