let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

const API_KEY = `ae18c8e0426d4e7386f111746230805`;
const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=bulk`;

const getWeather = (() => {
    let city_name = cityRef.value;
    if (city_name.length == 0) {
        result.innerHTML = `<h3 class="msg">Please Enter a city name</h3>`
    }
    else {
        cityRef.value = "";
        fetch(`${url}/${city_name}`)
            .then(res => res.json())
            .then((data) => {
                result.innerHTML = `
                 <h2>${data.location.name}</h2>
                 <h3>${data.current.condition.text}</h3>
                 <img src=${data.current.condition.icon}>
                 <h1>${data.current.temp_c}°C</h1>
            <div class="temp-container">
                
                <div>
                    <h4 class="title">Wind</h4>
                    <h4 class="temp">${data.current.wind_kph} Km💨</h4>
                </div>  
                <div>
                    <h4 class="title">Humidity</h4>
                    <h4 class="temp">${data.current.humidity} 💧</h4>
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