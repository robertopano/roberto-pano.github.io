function askName() {
    let username = sessionStorage.getItem('username');

    if (username === null) {
        username = prompt("To make your time on this website better, please enter your name.");
    }

    if (username != null) {
        document.getElementById("userpara").innerHTML = "Hello, " + username;
        sessionStorage.setItem('username', username);
    } else {
        document.getElementById("noUser").innerHTML = "Welcome, Stranger!";
    }
}