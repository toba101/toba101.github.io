// Weather API //
let weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b2e353ce185f86c20ab99b14bda3efa7';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

document.getElementById("currently").innerHTML = weatherData.weather[0].description;
document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
document.getElementById("Humidity").innerHTML = weatherData.main.humidity;
document.getElementById("windSpeed").innerHTML = weatherData.wind.speed;

 var temp = weatherData.main.temp;
 var speed = weatherData.wind.speed;

 var result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 *
  temp * Math.pow(speed, 0.16);

  document.getElementById('windChill').innerHTML = result.toFixed(1);
}

// Windchill //
var speed = parseInt(document.getElementById('windSpeed').innerHTML);
var temp = parseInt(document.getElementById('currentTemp').innerHTML);

var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;