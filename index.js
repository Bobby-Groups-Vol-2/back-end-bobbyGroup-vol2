const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'NekoFarmDB'

})

db.connect();

const app = express();
app.get('/Neko',(req,res)=> {   // Router เวลาเรียกใช้งาน
    let sql = 'SELECT * FROM users'  // คำสั่ง sql
    let query = db.query(sql,(err,results) => { // สั่ง Query คำสั่ง sql
    if(err) throw err  // ดัก error
    console.log(results) // แสดงผล บน Console 
    res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    })
    })
    app.listen('5000',() => {     // 
    console.log('start port 5000')  
    })

app.get('/', (req,res)=> {
    res.send('Hello i bird su su i noom noi')
})

//Init middleware
// app.use(logger);

//body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // set path
// app.use('/api/users', require('./routes/api/user'));

// //set staticfolder
// app.use(express.static(path.join(__dirname, 'public')));
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
