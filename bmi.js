const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));


app.get("/",function(req,res){
	res.sendFile(__dirname+"/bmi.html");
});


app.post("/",function(req,res){

	var num1 = parseFloat(req.body.num1);
	var num2 = parseFloat(req.body.num2);

	var bmi = ((num2)/(num1*num1));

	res.send("your bmi is : ",bmi);

});


app.listen(2000,function(){

	console.log("server started at port 2000");
});