const express = require('express');
const router = express.Router();
const watchlistController = require('../controllers/watchlistController');


router.post('/', watchlistController.createWatchlist);
router.post('/:watchlistId/items', watchlistController.addItemToWatchlist);
router.put('/:watchlistId/items/:itemId', watchlistController.updateItemStatus);
router.get('/:userId', watchlistController.getUserWatchlists);
router.get('/:watchlistId/items', watchlistController.getWatchlistItems);

module.exports = router;
