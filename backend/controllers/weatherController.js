const axios = require('axios');
/**
 * @param {object} req
 * @param {object} res
 * @returns {Promise<void>}
 */
exports.getWeatherByCoords = async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude and longitude are required.' });
        }

        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({ error: 'Latitude and longitude must be valid numbers.' });
        }

        console.log(`Fetching weather data for coordinates: lat=${latitude}, lon=${longitude}`);

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const data = response.data;

        const formattedResponse = {
            location: `${data.name}, ${data.sys.country}`,
            description: data.weather[0]?.description || 'No description available',
            icon: `https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`,
            temperature: data.main.temp, 
            cloudiness: data.clouds.all,
        };
        
        return res.status(200).json(formattedResponse);
    } catch (error) {
        console.error('Error fetching weather data:', error);

        if (error.response) {
            return res.status(error.response.status).json({
                error: 'Error fetching weather data from OpenWeather.',
                details: error.response.data,
            });
        }

        return res.status(500).json({ error: 'Internal server error.' });
    }
};
