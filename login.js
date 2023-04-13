function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "sanchi123" && password == "1234") {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid User name or Password!");
    }
}