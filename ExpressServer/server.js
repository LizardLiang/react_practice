const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const rsa = require('node-rsa')
const Bcrypt = require('bcrypt')
const fs = require('fs')
const { ids } = require('webpack');

let publicKey = new rsa()
let privateKey = new rsa()

const public = fs.readFileSync('./ExpressServer/public.pem', "utf8")
const private = fs.readFileSync('./ExpressServer/private.pem', "utf8")

publicKey.importKey(public)
privateKey.importKey(private)
// cuz JSEncrypt use pkcs1s
privateKey.setOptions({encryptionScheme: 'pkcs1'});

const app = express()
app.use(express.json())
app.use(cors())

const port = 5000;

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "ru.4gj65k3",
    database: "loginsystem"
})

app.post('/ExpressServer/api', (req, res) => {
    if(req.body.action == 'Regist'){
        let username = req.body.username;
        let password = privateKey.decrypt(req.body.password, 'utf8')
        Bcrypt.hash(password, 10).then(hash=>{
            db.query("INSERT INTO users (username, password) VALUES (?, ?)", 
            [username, hash], 
            (err, result)=>{
                if(err){
                    res.send({status: 'Failed', err: err})
                }
                else{
                    res.send({status: 'succeed'})
                }
            })
        })
    }
    else if(req.body.action == 'KeyRequest'){
        res.send({key:public})
    }
    else if(req.body.action == 'login'){
        let dec = privateKey.decrypt(req.body.password, 'utf8')
        db.query('SELECT password FROM users WHERE username = ?', [req.body.username], 
            function(err, row){
                Bcrypt.compare(dec, row[0].password).then(result=>{
                    if(result == true){
                        res.send({status: 'Success'})
                    }
                    else{
                        res.send({status: 'Fail'})
                    }
                })
            }
        )
    }
})

app.get('/', (req, res) => res.send('Hello World'))
// app.get('/ExpressServer/api', (req, res) => res.send('This is API page'))

app.listen(port, ()=>console.log(`Server is hosting on ${port}`))