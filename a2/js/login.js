$(`document`).ready(function() {
	nav();
    footer();
    $("#next").click(function()
    {
        GetLoginData();
    });


});


function GetLoginData() {
var email;
var password;
var login = false;

    $.post(checkLogin.php, {email,password}, function(data){

        sessionStorage.setItem(login, true);



}
)


}