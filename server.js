const express = require("express");
const cors   = require("cors");
const app = express();
const db = require("./app/models");
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  next()
})
db.sequelize.sync({ alter : true }).then(() => {
  console.log("offmeow works");
});
var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

// simple route
app.get("/", (req, res) => {
 
  res.sendFile(__dirname + '/upload.html');
});

app.get("/test", (req, res) => {
  res.json({ message: "It's work"})
})


app.post('/upload', function (req, res) {
  res.send(req.files)
})

require("./app/routes/vaccines.routes")(app);
require("./app/routes/species.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/patterns.routes")(app);
require("./app/routes/orders.routes")(app);
require("./app/routes/cats.routes")(app);
require("./app/routes/owns.routes")(app);
require("./app/routes/takes.routes")(app);



