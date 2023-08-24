require("dotenv").config();
const express = require("express");
const knex = require('knex')(require('./knexfile'));
const app = express();
const cors = require("cors");
const {PORT} = process.env || 8080;
const route =  require("./routes/route") //must change "/route" to appropriate naming

app.use(cors({origin: "*"}));
app.use(express.json());

app.use("/", (req, res) => {
    res.json({message: "Welcome to our web api! Home Team: Amanda, Sabrina, Darryl, Woodney --> Get better Demar!"})
})

app.use("/route", route) //must change "/route" AND "route" to appropriate naming

app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
    console.log("Type CTRL + C to exit")
})