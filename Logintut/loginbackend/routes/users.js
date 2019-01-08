var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection= mysql.createConnection({
	host:'localhost:80',
	user:'root',
	password:'root',
	database:'reactnative'
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  let sql = "SELECT * FROM user WHERE username ='"+username+"'' AND password='"+password+"'";

   connection.query(sql,(err,row,field)=> {
   		if (err) {
   			console.log(err);
   		res.send({'success': false,'message':'Could not connect db'});
   		} 
   		if (row.lenght > 0) {
   			res.send({'success': true, 'user': row[0].username});
   		}else {
   			res.send({'success':false, 'message': 'user not found'});
   		}
   	});
 });
module.exports = router;
