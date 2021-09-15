const express = require("express");
const cors   = require("cors");
const app = express();
const db = require("./app/models");
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  res.json({ message: "Welcome to OffMeow application. oi looking good ได้ทีเถอะ" });
});

app.get("/test", (req, res) => {
  res.json({ message: "It's work"})
})

require("./app/routes/vaccines.routes")(app);
require("./app/routes/species.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/patterns.routes")(app);
require("./app/routes/orders.routes")(app);
require("./app/routes/cats.routes")(app);
require("./app/routes/owns.routes")(app);
require("./app/routes/takes.routes")(app);



