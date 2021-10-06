const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const images = file.originalname.split(".")
      images[0] = images[0] +"-" + Date.now()
    cb(null,  images.join("."))
      
    }
  })
  
  var upload = multer({ storage: storage })

  module.exports= upload