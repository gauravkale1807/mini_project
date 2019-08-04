function booking(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("num").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(!check_is_not_null(fname)){
        document.getElementById("message1").innerHTML="(Enter First name)";
        return false;
    }else{
        document.getElementById("message1").innerHTML="";
    }
    if(!check_is_not_null(lname)){
        document.getElementById("message2").innerHTML="(Enter Last name)";
        return false;
    }else{
        document.getElementById("message2").innerHTML="";
    }
    if(!check_is_not_null(phone)){
        document.getElementById("message3").innerHTML="(Enter phone number)";
        return false;
    }else{
        document.getElementById("message3").innerHTML="";
    }
    if(!check_is_not_null(address)){
        document.getElementById("message4").innerHTML="(Enter Address)";
        return false;
    }else{
        document.getElementById("message4").innerHTML="";
    }
    if(!check_is_not_null(email)){
        document.getElementById("message5").innerHTML="(Enter EMail ID)";
        return false;
    }else if(!check_email(email)){
        document.getElementById("message5").innerHTML="(Invalid email id)";
        return false;
    }else{
        document.getElementById("message5").innerHTML="";
    }
}

function check_is_not_null(value){
    if(value.length>0)
        return true;
    else return false;
}

function check_email(login_email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login_email)){
        return true;
    }
    else{return (false)}
}