//ADD EVENT LISTENERS
window.addEventListener("load", start, false);


function start(){
     document.getElementById("people").addEventListener("change", ps,false);
      }
      
      
function ps(){
var personSelected = document.getElementById("people").value; 
//alert(personSelected);
    document.getElementById("personselected").innerHTML = personSelected
}




// Get the INPUT DATA from a JSON file and update the charts
ajaxcall();

/** **************************************************************************************** **/



function ajaxcall () {
/* Javascript AJAX REQUEST TO JSON FILE */
data = "person.json";

// function salesfunction() {
  //  alert(data);
  //  data1 ="person.json";
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      data1 = xhttp.responseText;
     // alert(data1);
      data = JSON.parse(data1);
     //DATA PARSED NOW _ CARRY OUT ACTIONS ON THE DATA OBJECTS WITHIN HERE 
     console.log('Error:', data);
     
     //Accessing data in the nested array
     //var value = data.person[1].name;
     //alert (value);
     
     //loop through the nested json
     for(var i = 0, l = data.person.length; i < l; i++) {
    // alert(data.person[i].name);
 
 
    // Populate the HTML DOM Form Select Button from the JSON File contents
    var x = document.getElementById("people");
    var option = document.createElement("option");
    option.text = data.person[i].name;
    alert(option.text);
    alert(option);
    x.add(option);
     
         
     }

     
 /* AJAX REQUEST END ******************************************************  */
    }
  };
  xhttp.open("GET", data, true);
  xhttp.send();
}  




        
