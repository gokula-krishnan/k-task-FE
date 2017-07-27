$(document).ready(function(){
    $("#login").click(function () {

       var lemail = $("#email").val();
       var lpassword = $("#password").val();
       var userdetails= JSON.parse(localStorage.getItem('userDetails'));
       if(lemail=="" || lpassword== "")
       {
           alert("please enter the required details");
       }
       else if(lemail!== userdetails.email)
       {
           alert("please enter the correct email ID");
       }
       else if(lpassword!== userdetails.password)
        {
            alert("please enter the correct password");
        }
        else
        {
            window.location.href = "homepage.html";
        }


    });
});