const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

// Endpoint GET untuk mendapatkan cuaca berdasarkan latitude dan longitude
app.get("/weather", async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Latitude and Longitude are required" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const weatherData = {
      location: `${response.data.name}, ${response.data.sys.country}`,
      weather: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      cloudiness: response.data.clouds.all,
    };

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
  }
});

module.exports = app;




// Endpoint POST untuk mendapatkan cuaca berdasarkan latitude dan longitude
app.post("/weather", async (req, res) => {
    const { lat, lon } = req.body; // Ambil lat dan lon dari body request
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!lat || !lon) {
        return res.status(400).json({ error: "Latitude and Longitude are required" });
    }

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        res.json({
            location: `${response.data.name} (${lat}, ${lon})`,
            temperature: response.data.main.temp,
            weather: response.data.weather[0].description,
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
    }
});

// Tambahkan route default untuk root
app.get("/", (req, res) => {
    res.send("Welcome to the Weather API! Use /weather for GET and POST requests.");
});


// Export app
module.exports = app;
