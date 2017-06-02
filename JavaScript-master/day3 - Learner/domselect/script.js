     
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
loadselect();
     
     function loadselect(){
     //declare array
     var cars = ["Saab", "Volvo", "BMW"];
     
     //loop through the nested json
     for(var i = 0, l = cars.length; i < l; i++) {
    // alert(data.person[i].name);
 
 
    // Populate the HTML DOM Form Select Button from the JSON File contents
    var x = document.getElementById("people");
    var option = document.createElement("option");
    option.text = cars[i];
    alert(option.text);
    alert(option);
    x.add(option);
     }
         
     }