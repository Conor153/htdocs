$(`document`).ready(function () {
    nav();
    footer();
    $("#login").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        console.log(email);//thomas.devine@atu.ie
        console.log(password);//letmein
        $.post("http://localhost/a2/ajax/checkLogin.php", { "email": email, "password": password }, function (data) {
            console.log(data.login);
            if (data.login.length == 0) {
                //alert("Invalid login: try again");
            }
            else {
                sessionStorage.setItem("login", "true");
                location.replace("http://localhost/a2/admin.html");
            }
        }, "json");
    });
});