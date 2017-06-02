//This is my file for the Password Task

//My Global variables

var listPassword;

var listUsername;

var savedPassword;

var userPassword;

var enterCase = 0;

var correctPassword;

var wrongPassword = [];

var userPassArray = [];


//This is what initialises everything
    window.onload = function() {

        if(localStorage.registerRecord) {

               userPassArray = JSON.parse(localStorage.registerRecord);
               console.log(userPassArray);
            }
        }



//Changing the layout of the first page

document.getElementById("linkB").style.display = "none";

document.getElementById("userForm").style.display = "none";

document.getElementById("userP").focus();

//Adding event listenner to my button register

document.getElementById("myRegister").addEventListener("click", registerUser, false);




function registerUser() {

    document.getElementById("wrongMessages").style.display = "none";
    
    document.getElementsByTagName("h3")[0].innerHTML = "Enter your details below to REGISTER";
    
    var hide = document.getElementsByClassName('hide');
    
    for(var i = 0; i < hide.length; i++) {
        
        //console.log(hide);
        
        hide[i].style.display = "none";
    }
    
    document.getElementById("userForm").style.display = "block";
    
    document.getElementById("userName").focus();
    document.getElementById("userName").innerHTML = " ";
    
    document.getElementById("myCancel").onclick = function() {
        
        location.reload(); //reload(forceGet) - forceGet reloads the page from the server
    };

   document.getElementById("mySubmit").onclick = function() {
       
    var myUserName = document.getElementById("userName").value;
    var myPassWord = document.getElementById("passWord").value;
       
    console.log(myPassWord);  
       
    retrievePassword(myPassWord);
         

    //console.log(correctPassword);
    //console.log(savedPassword);
     
    if ( myUserName !== "" && myPassWord !== "" && correctPassword !== "access") {
        
        //console.log(correctPassword);
       
    var passObj = {
                    username: myUserName, 
                    password: myPassWord
                  };   

    userPassArray.push(passObj);  
    //console.log(userPassArray);
       
    localStorage.registerRecord = JSON.stringify(userPassArray);
    //console.log(userPassArray); 
        
    location.reload();

        } else if ( myUserName === "" || myPassWord === "") {
            
            document.getElementsByTagName("h3")[0].innerHTML = "Please enter your USERNAME / PASSWORD or BOTH";
        
            document.getElementById("userName").focus();
            document.getElementById("userName").innerHTML = "";
        } else {
            
            correctPassword = "noAccess";
            //alert("Just trying!");
            document.getElementsByTagName("h3")[0].innerHTML = "Sorry this PASSWORD ALREADY EXIST";
        
            document.getElementById("passWord").focus();
            document.getElementById("passWord").innerHTML = "";
            
        }
       
    };
   
}

document.getElementById("myButton").addEventListener("click", loginUser, false);
function loginUser()
{
    
    
   document.getElementById("myButton").onclick = function() {
       
     userPassword = document.getElementById("userP").value;
       
   
       
    retrievePassword(myPassWord);

   if (correctPassword === "access" && userPassword !== "")
    {
       document.getElementById("linkB").style.display="block";
        
    }
    else{
        document.write("wrong password");
    }
 };
}
//This the function to retrieve the password from web storage
    function retrievePassword(inputPassword) {

        //console.log(inputPassword);

        for(var i = 0; i < userPassArray.length; i++) {

                   /*listPassword = userPassArray[i].password;

                   console.log(listPassword);

                   savedPassword = (listPassword.indexOf(inputPassword) > -1);

                   console.log(savedPassword);*/

                   if (inputPassword == userPassArray[i].password) {

                       correctPassword = "access"; 

                    }
        }

    }


