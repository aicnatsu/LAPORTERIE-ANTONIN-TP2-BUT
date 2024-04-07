const express = require('express');
const router = express.Router();
const registryController = require('../controllers/registryController');

router.post('/', registryController.addItemToRegistry);
router.get('/', registryController.getRegistryItems);

module.exports = router;
