var account_number = document.getElementById("account_number");
var password = document.getElementById("password");
var login = document.getElementById("button");
var main = document.getElementById("main");
var second = document.getElementById("second");

second.style.display = "none";

login.addEventListener("click", function () {
    if (account_number == "" && password == "") {
        alert("please fillup the form");
    }

    else {
        main.style.display = "none";
        second.style.display = "block";
    }
})