const express = require('express');

const plantsController = require('../controllers/plants');

const router = express.Router();

router.get('/plants', plantsController.getPlants);
router.post('/plants/new', plantsController.createPlant);
module.exports = router;