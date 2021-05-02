const express = require("express");
const cors = require('cors');
const mysql = require("mysql"); 

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'login'
});

db.connect((err)=>{
    if(err){
        console.log('Error in connection!!'+ err);  
    }
    console.log(' mysql connected!!');
})

app.post("/register", (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
    'INSERT INTO userinfo VALUES(?, ?, ?)',
    [username, email, password],                                     
    (err, result)=>{
        if(err) {throw err};
        console.log(result);
        res.send(' Database updated>>>'); 
    });
}); 

app.post("/login", (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query(
    'SELECT * FROM userinfo WHERE Email= ? AND Password= ?',
    [email, password],                                     
    (err, result)=>{
        if(err) {res.send({err:err})};
        if (result.length>0){ res.send(result); }
        else { res.send({msg:"Incorrect email/password combination"});}
    });
}); 
app.listen(3002, ()=> {
    console.log("Server is running");
})