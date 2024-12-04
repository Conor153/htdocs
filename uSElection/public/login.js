$(`document`).ready(function () {
    nav();
    footer();
    $("#login").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        
        $.post(`http://localhost:3000/users/${email}/${password}`, function (data) {
            if (data.login.length == 0) {
                $("tr[2]").appened(`
                    <tr>
                    <td></td>
                    <td>Invalid login credentials</td>
                    </tr>`
                );

            }
            else {
                sessionStorage.setItem("login", "true");
                location.replace("http://localhost/a2/admin.html");
            }
        }, "json");
    });
});