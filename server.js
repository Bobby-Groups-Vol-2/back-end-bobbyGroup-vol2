const express = require("express");
const cors   = require("cors");
const app = express();
const db = require("./app/models");
const PORT = process.env.PORT || 5000;
const multer = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})

var upload = multer({ storage: storage })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  methods: ['GET','PUT','POST','DELETE','UPDATE'],
  origin: '*',
  credentials: true,

}));
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

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
 
})




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



