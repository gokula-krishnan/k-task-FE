$(document).ready(function(){
    $("#register").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var phoneNumber = $("#phoneNumber").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        function isValidEmailAddress(email) {
            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return pattern.test(email);
        };
        if(name==''||email==""||phoneNumber==""||password==""||cpassword=="")
        {
            alert("please enter the required details");
        }
        else if( !isValidEmailAddress(email))
        {
            alert("Not a valid E-mail ID");
        }
        else if( phoneNumber.length < 10 || phoneNumber.length > 10)
        {
            alert("please enter the correct number");
        }
        else if((password.length)<8)
        {
            alert("password should be minimum 8 characters in length");
        }
        else if (password!== cpassword)
        {
            alert("password and confirm password are not same");
        }
        else
        {
            var userdetails = {
                name : name,
                email : email,
                phoneNumber : phoneNumber,
                password : password
            };
            localStorage.setItem('userDetails', JSON.stringify(userdetails));
            alert("You have registered successfully");

        }

    });

});