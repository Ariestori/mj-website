function login() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    var real_username = "Allister21";
    var real_password = "Allister21/23";


    if(username === real_username && password === real_password) {
        document.getElementById("error").innerHTML = "welcome" + "Username";
    }

    else {
        document.getElementById("error").innerHTML = "Invalid username or password";
    }

}

function forgot() {
    alert("You clicked the forgot password")
}