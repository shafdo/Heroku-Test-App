
const express = require("express")
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000


app.get('/', function (req, res) {
    res.send('The app is up and running.')
})

app.listen(port, () => {
    console.log("listening on port %d", port);
})