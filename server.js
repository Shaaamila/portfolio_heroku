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
// 	service: "Gmail",
// 	host: "smtp.gmail.com",
// 	auth: {
// 		user: "",
// 		pass: ""
// 	}
// });
// SMTP ends

//^new version w/o smtp:
// var transporter = nodemailer.createTransport({
// 	service: "Gmail",
// 	// host: "smtp.gmail.com",
// 	auth: {
// 		user: "gmail.user@gmail.com",
// 		pass: "userpass"
// 	}

// });

//routing starts

//deleted on oct 3, 19
//turn off now 1
// app.post('/contact-form', function(req,res){
// 	var data = req.body;

// 	var mailOptions ={
		// from : data.contactName,
	// 	from : "shamila.m09@gmail.com",
	// 	to : "shamila.m09@gmail.com", //msg destination
	// 	subject : 'Message from'+' '+ data.contactName+', Email: '+ data.contactEmail,
	// 	text : data.contactMsg
	// }
	// console.log(data.contactMsg);
	//turn off now 1+
	//smtpTranport
	// transporter.sendMail(mailOptions, function(error, response){
	// 	if(error){
			
	// 		res.end("error");
	// 	}else{
	// 		res.end("sent");
	// 	};
	// });


// });

// app.listen(8000, function() {
// 	console.log('Server is listening on port 8000');
// });

//unassigned port for heroku:
app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});



