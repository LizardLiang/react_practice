const express = require('express')

const app = express()

const port = 5000;

app.get('/', (req, res) => res.send('Hello World'))
app.get('/ExpressServer/api', (req, res) => res.send('This is API page'))

app.listen(port, ()=>console.log(`Server is hosting on ${port}`))