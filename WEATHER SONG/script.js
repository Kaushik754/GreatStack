const apiKey = "ENTER_API_KEY";
const city = "Kolkata"; // You can change the city as needed

async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  return data;
}

function chooseSong(weather) {
  let songUrl = "./song/bengali.m4a";
  if (weather.includes("cloud")) {
    songUrl = "./song/has.m4a"; // Replace with your actual song URL
  } else if (weather.includes("clear")) {
    songUrl = "./song/hhd.m4a"; // Replace with your actual song URL
  } else if (weather.includes("haze")) {
    songUrl = "./song/lapata.m4a"; // Replace with your actual song URL
  } else {
    songUrl = "./song/tumhiho.m4a"; // Default song
  }
  return songUrl;
}

async function updateMusicPlayer() {
  try {
    const weatherData = await getWeather();
    const weatherDescription = weatherData.weather[0].description;
    document.getElementById(
      "weather"
    ).textContent = `Current weather: ${weatherDescription}`;

    const songUrl = chooseSong(weatherDescription.toLowerCase());
    document.getElementById("audioSource").src = songUrl;
    document.getElementById("musicPlayer").load();

    showNotification(weatherDescription, songUrl);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather").textContent =
      "Error loading weather data";
  }
}

function showNotification(weatherDescription, songUrl) {
  if (Notification.permission === "granted") {
    new Notification(`Weather: ${weatherDescription}`, {
      body: `Now playing: ${songUrl.split("/").pop()}`,
      icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt3173910%2F&psig=AOvVaw0mbJNZy9NoJA6oYemKwcwf&ust=1719369249134000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiKs9zb9YYDFQAAAAAdAAAAABAE", // Replace with your actual icon URL
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(`Weather: ${weatherDescription}`, {
          body: `Now playing: ${songUrl.split("/").pop()}`,
          icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt3173910%2F&psig=AOvVaw0mbJNZy9NoJA6oYemKwcwf&ust=1719369249134000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiKs9zb9YYDFQAAAAAdAAAAABAE", // Replace with your actual icon URL
        });
      }
    });
  }
  setTimeout(updateMusicPlayer, 120000);
}

updateMusicPlayer();

let progress = document.getElementById("progress");
let song = document.getElementById("musicPlayer");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

if(song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  },500);
}

progress.onchange = function() {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

