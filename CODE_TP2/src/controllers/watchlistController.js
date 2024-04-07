const watchlistRepository = require('../repositories/watchlistRepository');

const createWatchlist = async (req, res) => {
  try {
    const { userId, watchlistName } = req.body;
    const newWatchlist = await watchlistRepository.createWatchlist({ userId, watchlistName });
    res.status(201).json(newWatchlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addItemToWatchlist = async (req, res) => {
    try {
      const { watchlistId } = req.params;
      const { itemName, itemDescription } = req.body;
  
      const updatedWatchlist = await watchlistRepository.addItemToWatchlist(watchlistId, { itemName, itemDescription });
  
      res.status(201).json(updatedWatchlist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateItemStatus = async (req, res) => {
  try {
    const { watchlistId, itemId } = req.params;
    const { newStatus } = req.body;

    const updatedWatchlist = await watchlistRepository.updateItemStatus(watchlistId, itemId, newStatus);

    res.status(200).json(updatedWatchlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserWatchlists = async (req, res) => {
  try {
    const { userId } = req.params;
    const userWatchlists = await watchlistRepository.getUserWatchlists(userId);
    res.status(200).json(userWatchlists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getWatchlistItems = async (req, res) => {
  try {
    const { watchlistId } = req.params;
    const watchlistItems = await watchlistRepository.getWatchlistItems(watchlistId);
    res.status(200).json(watchlistItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createWatchlist,
  addItemToWatchlist,
  updateItemStatus,
  getUserWatchlists,
  getWatchlistItems,
};
