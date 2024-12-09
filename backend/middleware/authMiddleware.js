module.exports = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (apiKey !== process.env.OPENWEATHER_API_KEY) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
};
