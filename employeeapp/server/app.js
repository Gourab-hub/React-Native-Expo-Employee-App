const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors =require('cors')
const port = 5000
require('./Employee')



app.use(bodyParser.json())
app.use(cors())

const Employee = mongoose.model("employee")

//FjIz5W6sB32Jcf03

const MONGOURI = "mongodb+srv://EmployeeApp:FjIz5W6sB32Jcf03@cluster0.japc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
    console.log("connected mongodb yahh................................................................")
})
mongoose.connection.on('error', (err) => {
    console.log(' err connected', err)
})



//Get All Employees
app.get('/', (req, res) => {
    Employee.find({})
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
})


//Post Data From Backend
app.post('/send', (req, res) => {
    // console.log(req.body)
    const emplouee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
    })
    emplouee.save()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
})


// Delete the record
app.post('/delete', (req, res) => {
    Employee.findByIdAndRemove(req.body.id)
        .then(data => {
            console.log(data)
            res.send('Deleted.....')
        }).catch(err => {
            console.log(err)
        })
})

//Update the Data
app.post('/update', (req, res) => {
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
    }).then(data => {
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})