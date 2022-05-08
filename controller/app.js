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


