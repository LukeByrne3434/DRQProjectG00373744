const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

const bodyParser =require("body-parser");
const mongoose = require('mongoose');
app.use(cors()); // use cors package everytime

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))  // parse the body http request
                                                 
// parse application/json
app.use(bodyParser.json())



const myConnectionString ='mongodb+srv://admin:admin@cluster0.zb3dp.mongodb.net/rodsbods?retryWrites=true&w=majority'
mongoose.connect(myConnectionString, { useUnifiedTopology: true },{useNewUrlParser: true});
const Schema = mongoose.Schema;

const rodsBodsSchema = new Schema({
    name:String,
    age:String,
    weight:String,
    height:String,
    goal:String,
    bmi:String, 
    calorieCount:String
    });

const rodsBodsSchema2 = new Schema({
       
        goal:String,
        bmi:String, 
        calorieCount:String
        });
    


var BodyModel = mongoose.model("rodsbods", rodsBodsSchema);
var BodyModel2= mongoose.model("rodsbods2", rodsBodsSchema2);



app.get('/api/rodsbods', (req, res)=>{    
    

    BodyModel.find((err, data)=>{
        res.json(data);
    })

   
})   


app.get('/api/rodsbods2', (req, res)=>{    
    

    BodyModel2.find((err, data)=>{
        res.json(data);
    })

   
})   



app.get('/api/rodsbods/:id', (req,res)=>{
    console.log(req.params.id);

    BodyModel.findById(req.params.id, (err, data)=>{
        res.json(data);
        console.log(data);
    })
})

app.put('/api/rodsbods/:id',(req, res) =>{
    console.log("Update movie "+req.params.id);
    console.log("TEEEEST BODY + " +JSON.stringify(req.body));

    BodyModel.findByIdAndUpdate(req.params.id, { $set: { goal: req.body.Goal, bmi: req.body.BMI, calorieCount: req.body.CalorieCount }}, { new: true }, function (err, article) {
        if (err) return handleError(err);
        res.send(article);
      });
        
      
})

app.post('/api/rodsbods', (req, res)=>{  //end point listing for post
    
    console.log('Body Received!');
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.weight);
    console.log(req.body.height);

    const body = BodyModel.create({
        name:req.body.name,
        age:req.body.age,
        weight:req.body.weight,
        height:req.body.height
    })

    
    res.send('Item Added');// stop duplicates
}) 

app.post('/api/rodsbods2', (req, res)=>{  //end point listing for post
    
    console.log('Body Received!');
    console.log("teeeeeeeeeest " +JSON.stringify(req.body));
    

    const body = BodyModel2.create({
        goal:req.body.Goal,
        bmi:req.body.Bmi,
        calorieCount:req.body.CalorieCount
    })

    
    res.send('Item Added');// stop duplicates
}) 
app.delete('/api/rodsbods/:id',(req,res)=>{  // listen
    console.log("Delete Profile: "+req.params.id); // log to the url

    BodyModel.findByIdAndDelete(req.params.id,(err, data)=>{  // delete the record
        console.log("ERROOOOOOOOR" +err)
        res.send(data);  
    })


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})