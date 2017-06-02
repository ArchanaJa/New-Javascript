

//default values on page load  
var thecustomer = "The Customer"
 document.getElementById("thecustomer").innerHTML = thecustomer;
data = "cases.json";
thetype = document.getElementById("charttype").value;
thetitle = "Cases by Year";
thedescription = "This chart displays the number of new referrals each calendar year"
 document.getElementById("charttitle").innerHTML = thetitle;
 document.getElementById("chartdescription").innerHTML = thedescription;

// Get the INPUT DATA from a JSON file and update the charts
ajaxcall();

 

//ADD EVENT LISTENER
//window.addEventListener('load', startup)
 document.getElementById("source").addEventListener("change", whichchart,false);
 document.getElementById("charttype").addEventListener("change", whichtype,false);

function whichtype(){
    thetype = document.getElementById("charttype").value;
  //  alert(thetype);
    whichchart();
    
}


function whichchart () {
chartchosen = document.getElementById("source").value;
    if (chartchosen === "sessions"){
        
        data = "sessions.json";
        thetitle = "Sessions by Year";
        thedescription = "This chart displays the number of sessions delivered in the calendar year"
        document.getElementById("charttitle").innerHTML = thetitle;
        document.getElementById("chartdescription").innerHTML = thedescription;
        
       ajaxcall();
    } else {
    // case chart is chosen
        data = "";
        data = "cases.json";
        thetitle = "Cases by Year";
        thedescription = "This chart displays the number of new referrals each calendar year"
        document.getElementById("charttitle").innerHTML = thetitle;
        document.getElementById("chartdescription").innerHTML = thedescription;
       
        ajaxcall();
    }

}

function ajaxcall () {
/* Javascript AJAX REQUEST TO JSON FILE */

// function salesfunction() {
  //  alert(data);
    data1 ="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      data1 = xhttp.responseText;
     // alert(data1);
      data = JSON.parse(data1);
     //DATA PARSED NOW _ CARRY OUT ACTIONS ON THE DATA OBJECTS WITHIN HERE 
    // alert(data.sold[0]);
    // alert(data.label.length);
    // alert(data.label[0]);
      
      builddataset();
      drawchart();
 /* AJAX REQUEST END ******************************************************  */
    }
  };
  xhttp.open("GET", data, true);
  xhttp.send();
}  


function builddataset(){
     //BUILD DATASET WIRE JSON OBJECTS TO THE CHART DATA ARRAY
     // var dps = [{label:,y:2}];
    //var arrayB = new Array()
    
     dps = []; //Global variable by not adding var for local scope
    //LOOP THROUGH DATASET AND ADD DATA TO LINE CHART
       for(var i = 0; i < data.label.length; i++){
            var xval = data.label[i];  //TEXT
            var yval = parseInt(data.sold[i]); //NUMBER
     
          dps.push({label: xval, y: yval,});
        }
    //END LOOP    
}



/*  DRAW CHARTS START **********************************  
Use the ChartJS Framework to display the chart  -http://canvasjs.com/ 
********************************** */

function drawchart(){

  CanvasJS.addColorSet("purpleShades",
                [//colorSet Array
                    "#4c1a4c",
                    "#732673",
                    "#993399",
                    "#bf40bf",
                    "#cc66cc",
                    "#d98cd9",
                    "#e5b3e5",  
                    "#f2d9f2"            
                ]);

	var chart = new CanvasJS.Chart("chartContainer", {
	    colorSet: "purpleShades",
	   //  backgroundColor: "#f2f2f2",
	   legend: {
       horizontalAlign: "left", // "center" , "right"
       verticalAlign: "center",  // "top" , "bottom"
       fontSize: 15
        },
		title:{
		//	text: "Chart left"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: thetype,
		//	 indexLabelFontColor: "red",
		//	 indexLabelBackgroundColor: "LightBlue",
			  markerType: "square",
			dataPoints: dps
		}
		]
	});
	chart.render();

}


/*
	$('tbody').empty();
	$('tbody').append('<tr><td></td><th>'+ data.Products[0]+'</th><th>'+data.Products[1]+'</th></tr>');

	for(var i = 0; i < data.Product1.length; i++){
		$('tbody').append('<tr><td>' + data.charLabels[i] + '</td><td>' + data.Product1[i] + '</td><td>' + data.Product2[i] + '</td></tr>')
	};

*/		
/*  DRAW CHARTS END **********************************  */


	


















 

  



  