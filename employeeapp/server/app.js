const express =require('express');
const app= express();
const bodyParser = require('body-parser')
const mongoose =require('mongoose')
const port = 5000

require('./Employee')

const Employee = mongoose.model("employee")


//
//FjIz5W6sB32Jcf03

const MONGOURI ="mongodb+srv://EmployeeApp:FjIz5W6sB32Jcf03@cluster0.japc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(MONGOURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
mongoose.connection.on('connected', ()=>{
    console.log("connected mongodb yahh................................................................")
})
mongoose.connection.on('error', (err)=>{
    console.log(' err connected',err)
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})