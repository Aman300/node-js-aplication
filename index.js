const express = require('express')
const mongoose= require('mongoose')
const app = express();
const ejs = require('ejs');
const studentModule = require("./models/studentModule")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set ('view engine', 'ejs');

mongoose.connect("mongodb+srv://Aman300:ByXZ2qfTNQNWF7Uj@cluster0.o4rcy.mongodb.net/fontEnd-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.get('/view',(req, res) => {
//     let fname = "Aman "
//     let lname = "kumar"
//     let age = "21"

//     res.render('index',{
//         firstName: fname,
//         lastName: lname,
//         age: age
//     })
// })

app.get("/view", function (req, res) {   
    studentModule.find({}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { details: allDetails })
        }
    })
    })

    app.get("/error", function (req, res) {   
        res.sendFile(__dirname + '/public/error.html')
        })

app.get('/form',(req,res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', function(req, res){
    let NewStudentData = new studentModule({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        className: req.body.className
    })
    // console.log(fname)
    NewStudentData.save();
    res.redirect('/view')
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
