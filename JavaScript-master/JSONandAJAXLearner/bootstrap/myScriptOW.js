// This is my Javascript for Open Weather exercise

var theButton = document.getElementById("myButton");
theButton.addEventListener("click", getWeather, false);

function getWeather(){
    
    var userCity = document.getElementById("theCity").value;
    console.log(userCity);
    
    var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity + "&units=metric&APPID=f3216d67683dec9853217f94b282b8f9&cnt=7";
    
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", theAPICall, true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
            
            var D0 = new Date(myData.list[0].dt*1000);
            var D1 = new Date(myData.list[1].dt*1000);
            var D2 = new Date(myData.list[2].dt*1000);
            
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            
            var weatherImage = "http://openweathermap.org/img/w/" + myData.list[0].weather[0].icon + ".png";
            document.getElementById("imageToday").src = weatherImage;
            
            document.getElementById("highToday").innerHTML = myData.list[0].temp.max + "<br><br>";
            
            //Day 1
            var weatherImage1 = "http://openweathermap.org/img/w/" + myData.list[1].weather[0].icon + ".png";
            document.getElementById("r1c1").innerHTML = days[D0.getDay()];
            document.getElementById("r1c2").src = weatherImage1;
            document.getElementById("r1c3").innerHTML = myData.list[1].temp.max ;
            document.getElementById("r1c4").innerHTML = myData.list[1].temp.min ;
            
            //Day 2
            var weatherImage2 = "http://openweathermap.org/img/w/" + myData.list[2].weather[0].icon + ".png";
            document.getElementById("r2c2").src = weatherImage2;
            document.getElementById("r2c1").innerHTML = days[D1.getDay()];
            document.getElementById("r2c3").innerHTML = myData.list[2].temp.max ;
            document.getElementById("r2c4").innerHTML = myData.list[2].temp.min ;
            //Day 3
            var weatherImage3 = "http://openweathermap.org/img/w/" + myData.list[3].weather[0].icon + ".png";
            document.getElementById("r3c2").src = weatherImage3;
            document.getElementById("r3c1").innerHTML = days[D2.getDay()];
            document.getElementById("r3c3").innerHTML = myData.list[3].temp.max ;
            document.getElementById("r3c4").innerHTML = myData.list[4].temp.max ;
            
        }
}
    
 myRequest.send();   
}