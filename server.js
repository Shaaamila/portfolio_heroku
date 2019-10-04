//npm install 
var express = require('express');
var app = express();
var bodyParser	= require('body-parser');
// var nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

//deleted on oct3, 19
// SMTP starts
// var smtpTransport = nodemailer.createTransport({
// 	service: "gmail",
// 	host: "smtp.gmail.com",
// 	auth: {
// 		user: "",
// 		pass: ""
// 	}
// });
// SMTP ends

//routing starts

//deleted on oct 3, 19
// app.post('/contact-form', function(req,res){
// 	var data = req.body;

// 	var mailOptions ={
// 		from : data.contactName,
// 		to : "shamila.m09@gmail.com", //msg destination
// 		subject : 'Message from'+' '+data.contactName+', Email: '+ data.contactEmail,
// 		text : data.contactMsg
// 	}
	
// 	smtpTransport.sendMail(mailOptions, function(error, response){
// 		if(error){
			
// 			res.end("error");
// 		}else{
// 			res.end("sent");
// 		};
// 	});
// });

// app.listen(8000, function() {
// 	console.log('Server is listening on port 8000');
// });

//unassigned port for heroku:
app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});



