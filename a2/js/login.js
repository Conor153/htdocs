$(`document`).ready(function () {
    nav();
    footer();
    $("#login").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        $.post("http://localhost/a2/ajax/checkLogin.php", { "email": email, "password": password }, function (data) {
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