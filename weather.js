const api = {
    key: "de809b9fbd32e612472c483c3538f277",
    base: "https://api.openweathermap.org/data/2.5/",
    pic: "https://openweathermap.org/img/wn/"
};

const searchbox = document.querySelector('.search');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode === 13 || !evt.keyCode === '') {
        getResults(searchbox.value);
        //console.log(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);

}



function displayResults(weather) {
    console.log(weather);

    var para = document.createElement("H3");
    para.style.paddingTop = "10px";
    para.style.paddingBottom = "10px";

    para.innerHTML = "<h2 style:fontWeight:bold; fontSize:20px;>" + "<strong>Current weather for " + weather.name + ", " + weather.sys.country + "</strong></h2>" + "<br>" + "<strong>Weather:</strong> " + weather.weather[0].main + "<br>" + "<strong>Weather Description:</strong> " + weather.weather[0].icon + "@2x.png " + weather.weather[0].description + "<br>" + "<strong>Temperature:</strong> " + weather.main.temp + " &deg;C" + "<br>" + "<strong>Pressure:</strong> " + weather.main.pressure + " hPa" + "<br>" + "<strong>Humidity:</strong> " + weather.main.humidity + "%" + "<br>" + "<strong>Min Temperature:</strong> " + weather.main.temp_min + "&deg;C" + "<br>" + "<strong>Max Temperature:</strong> " + weather.main.temp_max + "&deg;C" + "<br>" + "<strong>Wind Speed:</strong> " + weather.wind.speed + " m/s" + "<br>" + "<strong>Wind Direction:</strong> " + weather.wind.deg;

    document.getElementById("showWeather").appendChild(para);
} 
