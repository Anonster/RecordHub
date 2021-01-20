//Calling Express
const express = require('express')
//Intializing App by calling express fucntion
const app = express()
//Setting available port to launch our server
const port = 3000

//Requiring Ejs Module
const ejs = require('ejs');

//Setting  our Views Folder
app.set("views", "views");
app.set("view engine", "ejs");

//Setting Public resources folder
app.use(express.static(__dirname + "/public"));

//Home Route
app.get('/', (req, res) => {
  res.render("Landing")
})

app.listen(port, () => {
  console.log(`App Started on ${port}`)
})