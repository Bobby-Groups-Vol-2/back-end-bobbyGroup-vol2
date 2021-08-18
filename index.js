const express = require('express');
const path = require('path');

const  logger  = require('./middleware/logger');

const app = express();


//Init middleware
// app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   

app.use('/api/users', require('./routes/api/user'))

//set staticfolder
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));