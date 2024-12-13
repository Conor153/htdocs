$(`document`).ready(function () {
    nav();
    footer();
    //thomas.devine@atu.ie
    //letmein
    $("#login").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        $.post(`http://localhost:3000/login/${email}/${password}`, function (data) {  
        if (data.length == 0) 
            {
                $("table thead tr:eq(1)").after(`
                    <tr>
                    <td></td>
                    <td>Invalid login credentials!</td>
                    </tr>`
                );
            }
            else {
                sessionStorage.setItem("login", "true");
                location.replace("http://localhost:3000/admin.html");
            }
        }, "json");


    });
});