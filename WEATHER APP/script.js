const apiKey = "68cde4263b8e5641fb9f5670eea28ba5";
const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
   try {
    const response = await fetch(URL + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds") {
       weatherIcon.src = "./img/clouds.png";
    }else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "./img/clear.png";
    }else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "./img/rain.png";
    }else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./img/drizzle.png";
    }else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "./img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    } 
   } catch(err) {
     document.querySelector(".error").innerHTML = "Something went wrong";
     document.querySelector(".error").style.display = "block";
   }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});