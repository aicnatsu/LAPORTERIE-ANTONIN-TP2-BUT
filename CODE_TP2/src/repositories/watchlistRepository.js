const watchlists = [];

const createWatchlist = async ({ userId, watchlistName }) => {
  const newWatchlist = { id: watchlists.length + 1, userId, watchlistName, items: [] };
  watchlists.push(newWatchlist);
  return newWatchlist;
};

const addItemToWatchlist = async (watchlistId, { itemName, itemDescription }) => {
    const watchlist = watchlists.find((wl) => wl.id === parseInt(watchlistId));
    
    if (!watchlist) {
      throw new Error('Watchlist not found');
    }
  
    const newItem = { id: watchlist.items.length + 1, itemName, itemDescription };
    watchlist.items.push(newItem);
  
    return watchlist;
};

const updateItemStatus = async (watchlistId, itemId, newStatus) => {
  const watchlist = watchlists.find((wl) => wl.id === parseInt(watchlistId));
  
  if (!watchlist) {
    throw new Error('Watchlist not found');
  }

  const itemToUpdate = watchlist.items.find((item) => item.id === parseInt(itemId));
  
  if (!itemToUpdate) {
    throw new Error('Item not found in the watchlist');
  }

  itemToUpdate.status = newStatus;

  return watchlist;
};  

const getUserWatchlists = async (userId) => {
  const userWatchlists = watchlists.filter((watchlist) => watchlist.userId === parseInt(userId));
  return userWatchlists;
};

const getWatchlistItems = async (watchlistId) => {
  const watchlist = watchlists.find((wl) => wl.id === parseInt(watchlistId));
  
  if (!watchlist) {
    throw new Error('Watchlist not found');
  }

  return watchlist.items;
};

const deleteWatchlistItems = async (watchlistId) => {
  const delItemsWatchlist = watchlists.delete((watchlist) => watchlist.itemsId === parseInt(watchlistId));
  return delItemsWatchlist;
};

const deleteWatchlist = async (watchlistId) => {
  const delWatchlist = watchlists.delete((watchlist) => watchlist.id === parseInt(watchlistId));
  return delWatchlist ;
};

const addWatchlistfavorite = async (watchlistId) => {
  const addWatchlistfav = watchlists.find((wl) => wl.id === parseInt(watchlistId));
  return addWatchlistfav;
};

module.exports = {
  createWatchlist,
  addItemToWatchlist,
  updateItemStatus,
  getUserWatchlists,
  getWatchlistItems,
  deleteWatchlistItems,
  deleteWatchlist,
  addWatchlistfavorite
};
