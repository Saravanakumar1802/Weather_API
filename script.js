let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

const API_KEY = '5458b1cca78ac803f08d4bb46be40a3e';

const getWeather = (() => {
    let city_name = cityRef.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

    if (city_name.length == 0) {
        result.innerHTML = `<h3 class="msg">Please Enter a city name</h3>`
    }
    else {
        cityRef.value = "";
        fetch(`${url}`)
            .then(res => res.json())
            .then((data) => {
                result.innerHTML = `
                 <h2>${data.name}</h2>
                 <h3>${data.weather[0].main}</h3>
                 <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                 <h1>${Math.round(data.main.temp/10)}°C</h1>
            <div class="temp-container">      
                <div>
                    <h4 class="title">Wind</h4>
                    <h4 class="temp">${data.wind.speed} Km💨</h4>
                </div>  
                <div>
                    <h4 class="title">Humidity</h4>
                    <h4 class="temp">${data.main.humidity} 💧</h4>
                </div>
            </div>
                 `
            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg">City Not Found</h3>`
            })
    }
})

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather)
