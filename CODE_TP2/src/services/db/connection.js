const { MongoClient } = require('mongodb');
const conf = require("../../../conf.json")
const axios = require('axios');
// Connection URI
const url = conf.databaseUrl;
const dbName = conf.databaseName;

// Create a new MongoClient
const client = new MongoClient(url);

async function connectTodB() {
    try {
        console.log('Trying to access the db...');
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Establish and verify connection
        await client.db('admin').command({ ping: 1 });
        console.log('Connected successfully to server');
    } catch (e) {
        // Ensures that the client will close when you finish/error
        console.log(JSON.stringify(err));
        await client.close();
        throw e;
    }
}

function getCollection(collectionName) {
    return client.db(dbName).collection(collectionName);
}

async function getMovieData() {
    try {
        const response = await axios.get('http://www.omdbapi.com/?apikey=789ba7c8');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function insertMovieData() {
    const movieData = await getMovieData(); 

    if (!movieData) {
        console.error('erreur de récup des données');
        return;
    }

    const collection = client.db(dbName).collection('movies');
    collection.insertOne(movieData, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    });
}

module.exports = {
    connectTodB,
    getCollection,
    getMovieData,
    insertMovieData
};

module.exports.connectTodB = connectTodB;
