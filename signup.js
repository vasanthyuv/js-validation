function validation() {
    var name = document.getElementById("uname").value;
    var email = document.getElementById("mail").value;
    var pwd = document.getElementById("pass").value;
    var cpwd = document.getElementById("cpass").value;


    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.*\s).{6,12}$/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(pwd.length < 8)
    {
        alert ('Password minimum length is 8');
    }
    else if(pwd.length > 15)
    {
        alert ('Password max length is 15');
    }
    else
    {                                           
           alert('Thank You for Registration & You are Redirecting to Website');
           
           window. location = "http://127.0.0.1:5500/signinredirection.html"; 
    }



   
}