//for mixitup
  var containerEl = document.querySelector('.portfolio-images');
  var mixer = mixitup(containerEl);

  //for form validation
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
let flag = 1;

function validateFrom(){
    if(username.value == ""){
   document.getElementById("username_error").innerHTML="Please Enter Your Name!";
   flag = 0;
    }else if(username.value.length<3){
        document.getElementById("username_error").innerHTML="Enter Minimum 3 Character!";
        flag = 0; 
    }else{
        document.getElementById("username_error").innerHTML= "";
        flag = 1;   
    }

    if(email.value == ""){
        document.getElementById("email_error").innerHTML="Please Enter Your Email or Phone!";
        flag = 0; 
    }else if(email.value.length<10){
        document.getElementById("email_error").innerHTML="Invalid Email Address or Phone Number!";
        flag = 0; 
    }else{
        document.getElementById("email_error").innerHTML="";
        flag = 1; 
    }



    if(password.value == ""){
        document.getElementById("pass_error").innerHTML="Please Enter Your Password!";
        flag = 0; 
    }else if(password.value.length<8){
        document.getElementById("pass_error").innerHTML="Password Must Be 8 character!";
        flag = 0; 
    }else{
        document.getElementById("pass_error").innerHTML="";
        flag = 1; 
    }


    if(message.value == ""){
        document.getElementById("msg_error").innerHTML="Please Write a Short Note About Your Project!";
        flag = 0; 
    }else if(message.value.length>300){
        document.getElementById("msg_error").innerHTML="Message Must Be in 300 Words"; 
        flag = 0; 
    }else{
        document.getElementById("msg_error").innerHTML="";
        flag = 1; 
    }
   if(flag){
       return true;
   }else{
       return false;
   }
}