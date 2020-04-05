//import dependecies

const path = require("path");
const express = require("express");

//creating the app

var app = express();

//import routes

const mathroute = require("./routes/math");
const phyroute = require("./routes/physique");
const algoroute = require("./routes/algo");

app.use("/math", mathroute.math);
app.use("/algo", algoroute.algo);
app.use("/physique", phyroute.phy);

// setting port

const PORT = 3000;

//define root folder
app.use(express.static(path.join(__dirname, "client/home")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => console.log(`Server Running on PORT : ${PORT}`));