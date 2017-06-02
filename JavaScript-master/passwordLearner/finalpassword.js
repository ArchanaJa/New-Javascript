// My code for the password exercise

var listPassword;

var listUsername;

var savedPassword;

var userPassword;

var enterCase = 0;

var correctPassword;

var wrongPassword = [];

var userPassArray = [];

init();

document.getElementById("myButton").addEventListener("click", checkPassword, false);
document.getElementById("myRegister").addEventListener("click", registerUser, false);

function checkPassword() {
    
    userPassword = document.getElementById("userP").value;
    //console.log(userPassword);
    
    retrievePassword(userPassword);

    //console.log(correctPassword);
    //console.log(savedPassword);
    
if (correctPassword !== "access" && userPassword !== "") {
    
    enterCase++;
        
        //console.log(enterCase);

        
        switch (enterCase) {
                
            case 1:
                
            wrongMessage();
   
        break;
                
                
            case 2:
                
            wrongMessage();
   
        break;
                
                
            default:
                
        wrongMessage();
                
        removeElements();
                
        document.getElementById("wrongMessages").setAttribute("class", "pL");

        document.getElementById("wrongMessages").innerHTML = "YOU ARE NOW LOCKED FROM YOUR ACCOUNT<br /><br /><br />Here are your wrong passwords: <br /><br />" + wrongPassword.toString().split(",").join(" | ") + "<br /><br />";
                
        var resetS = document.createElement("span");
        var resetH = document.createElement("h3");       
        var resetA = document.createElement("a");
        
        resetS.appendChild(resetH);        
        resetS.appendChild(resetA);
        
        document.getElementById("wrongMessages").appendChild(resetS);
                
        resetH.innerHTML = "You must REGISTER again to have access<br /><br />";
        resetA.innerHTML = '<a href="#" type="button" class="submitButton corners">Start Again</a>';    
                
        resetA.onclick = function() {
            
            localStorage.removeItem("registerRecord");
            
            location.reload();

        };
        
        break;   
 
        }



} else if (correctPassword === "access" && userPassword !== "") {

    //console.log(correctPassword);
    removeElements();
    
    document.getElementById("wrongMessages").style.display = "none";
    
    document.getElementById("myMessages").innerHTML = "GREAT! YOU NOW HAVE ACCESS TO OUR WEBSITE  <br /><br />Click the button below to gain access<br /><br />";
    
    document.getElementById("linkB").style.display = "inline";
    
    logO.onclick = function() {
        
        location.reload(); //reload(forceGet) - forceGet reloads the page from the server
    };
    //console.log(logO);
    
        
    deleteA.onclick = function() {
        
        location.reload(); //reload(forceGet) - forceGet reloads the page from the server
        
        localStorage.removeItem("registerRecord");
    };
   
    
} else {

    
        
        document.getElementById("myMessages").innerHTML = "Please enter your PASSWORD or REGISTER to create one";
        
        correctPassword = "noAccess";
        
        document.getElementById("userP").focus();

        //console.log(correctPassword);

}

}


//Register Button Code

function registerUser() {

    document.getElementsByTagName("h3")[0].innerHTML = "Enter your details below to REGISTER";
    
    var hide = document.getElementsByClassName('hide');
    
    for(var i = 0; i < hide.length; i++) {
        
        //console.log(hide);
        
        hide[i].style.display = "none";
    }
    
    document.getElementById("userForm").style.display = "inline";
    
    document.getElementById("userName").focus();
    document.getElementById("userName").innerHTML = "";
    
    myCancel.onclick = function() {
        
        location.reload(); //reload(forceGet) - forceGet reloads the page from the server
    };

   mySubmit.onclick = function() {
       
    var myUserName = document.getElementById("userName").value;
    var myPassWord = document.getElementById("passWord").value;
       
    console.log(myPassWord);  
       
    retrievePassword(myPassWord);
         

    console.log(correctPassword);
    console.log(savedPassword);
     
    if ( myUserName !== "" && myPassWord !== "" && correctPassword !== "access") {
        
        console.log(correctPassword);
       
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


function retrievePassword(inputPassword) {
    
    console.log(inputPassword);
    
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

function init() {
    
    document.getElementById("userP").focus();
    document.getElementById("linkB").style.display = "none";
    document.getElementById("userForm").style.display = "none";
    document.getElementById("wrongMessages").setAttribute("class", "pL1 hide");
    
    window.onload = function() {
    
    if(localStorage.registerRecord) {
        
            //userPassword = document.getElementById("userP").value;
        
           userPassArray = JSON.parse(localStorage.registerRecord);
           console.log(userPassArray);
        }
    }
}


function wrongMessage() {
    
    document.getElementById("myMessages").innerHTML = "WRONG PASSWORD - This is your "+ (enterCase) + " ATTEMPT out of 3";
    
    document.getElementById("userP").focus();
                
    wrongPassword.push(userPassword);

}

function removeElements() {
    
    //document.getElementById("userRegister").remove(); //this is a function of jQuery
    
    document.getElementById("firstLog").style.display = "none";
    
    document.getElementById("userForm").style.display = "none";

    document.getElementsByTagName("h3")[0].style.display = "none";
}




/*function loadHomepage() {
    
    document.getElementsByTagName("h3")[0].innerHTML = "Enter your password to access our website";
    
    document.getElementById("firstLog").style.display = "block";
    document.getElementById("userForm").style.display = "none";

    var hide = document.getElementsByClassName('hide');
    
    for(var i = 0; i < hide.length; i++) {
        
        //console.log(hide);
        
        hide[i].style.display = "inline";
    }
    
    document.getElementById("myMessages").style.visibility = "visible";
    document.getElementById("linkB").style.display = "none";
    document.getElementById("wrongMessages").style.display = "block";
    document.getElementById("userP").focus();
}*/





// This code is to hide my email from browser robots and avoid span to your inbox

/*
var myEmail = document.createElement("span");

myEmail.innerHTML = "";

document.getElementById("hideEmail").appendChild(myEmail);
document.getElementById("hideEmail").setAttribute("href","mailto:manuelc@justit.co.uk");
*/
