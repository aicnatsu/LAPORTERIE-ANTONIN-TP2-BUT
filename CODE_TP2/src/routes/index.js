const express = require('express');
const app = express();
const usersRoutes = require('./users');
const registryRoutes = require('./registry');
const watchlistsRoutes = require('./watchlists');



const metrics = {
    requests : {},
};

app.use('/users', usersRoutes);
app.use('/registry', registryRoutes.addItemToWatchlist);
app.use('/watchlists', watchlistsRoutes.createWatchlist);
app.use('/:watchlistId/items', watchlistsRoutes.addItemToWatchlist);
app.use('/:watchlistId/items/:itemId', watchlistsRoutes.updateItemStatus);
app.use('/registry', registryRoutes.getRegistryItems);
app.use('/users', usersRoutes.getUsers);
app.use('/watchlists', watchlistsRoutes.getUserWatchlists);
app.use('/watchlists/:watchlistId', watchlistsRoutes.getWatchlistItems);

