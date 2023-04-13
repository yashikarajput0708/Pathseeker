function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "sanchi123" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid Username or Password!");
    }
}