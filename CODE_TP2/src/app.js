const express = require('express')
const app = express()
const port = 3000
const {connectTodB} = require("./services/db/connection")
const {findOne, find, insertOne, insertMany, updateOne, updateMany, replace, deleteOne, deleteMany} = require("./services/db/crud")


app.get('/users', async (req, res) => {
  const users = await findOne("users", {})
  res.send(users)
})

app.get('/find', async (req, res) => {
  const users = await find("users", {})
  res.send(users)
})

app.get('/insertOne', async (req, res) => {
  const users = await insertOne("users", {})
  res.send(users)
})

app.get('/insertMany', async (req, res) => {
  const users = await insertMany("users", {})
  res.send(users)
})

app.get('/updateOne', async (req, res) => {
  const users = await updateOne("users", {})
  res.send(users)
})

app.get('/updateMany', async (req, res) => {
  const users = await updateMany("users", {})
  res.send(users)
})

app.get('/replace', async (req, res) => {
  const users = await replace("users", {})
  res.send(users)
})

app.get('/deleteOne', async (req, res) => {
  const users = await deleteOne("users", {})
  res.send(users)
})

app.get('/deleteMany', async (req, res) => {
  const users = await deleteMany("users", {})
  res.send(users)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectTodB()
})




