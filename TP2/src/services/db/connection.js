const { MongoClient } = require('mongodb');
const conf = require("../../../conf.json")
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

module.exports = {
    connectTodB,
    getCollection,
};