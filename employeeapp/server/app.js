const express =require('express');
const app= express();
const bodyParser = require('body-parser')
const mongoose =require('mongoose')
const port = 5000


//
//FjIz5W6sB32Jcf03

const mongoUri ="mongodb+srv://EmployeeApp:FjIz5W6sB32Jcf03@cluster0.japc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})