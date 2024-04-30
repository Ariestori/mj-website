function register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;


    if(username === "" || name === "" || password === "") {
        document.getElementById("error").innerHTML = "All text boxes are required";
    }
    else {
        document.getElementById("error").innerHTML = "welcome" + username;
    }


}

function forgot() {
    alert("You clicked the forgot password")
}