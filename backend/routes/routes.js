const express = require('express');
const router = express.Router();

const { getWeatherByCoords } = require('../controllers/weatherController');
const { searchFoodsByTitle } = require('../controllers/searchController');
const { detailFoodsById } = require('../controllers/detailController');
const { getRecommendations } = require("../controllers/recommendationController");

router
  .get('/cuaca', getWeatherByCoords)      
  .get('/cari', searchFoodsByTitle)    
  .get('/detail', detailFoodsById)      
  .get("/recommend", getRecommendations);

console.log('Semua rute berhasil dimuat.');

module.exports = router;
