const apiKey = "68cde4263b8e5641fb9f5670eea28ba5";
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
  if (weather.includes("rain")) {
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
      icon: "icon.png", // Replace with your actual icon URL
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(`Weather: ${weatherDescription}`, {
          body: `Now playing: ${songUrl.split("/").pop()}`,
          icon: "icon.png", // Replace with your actual icon URL
        });
      }
    });
  }
  setTimeout(updateMusicPlayer, 120000);
}

updateMusicPlayer();
