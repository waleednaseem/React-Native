var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection= mysql.createConnection({
	host:'192.168.97.2',
	user:'root',
	password:'root',
	database:'reactnative'
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

   connection.query({
   	"SELECT * FROM user WHERE username =? AND password=?",
   	[username, password],function function(err,row,field) {
   		if (err) {
   			console.log(err);
   		res.send({'success': false,'message':'Could not connect db'});
   		} 
   		if (row.lenght > 0) {
   			res.send({'success': true, 'user': row[0].username});
   		}else {
   			res.send({'success':false, 'message': 'user not found'});
   		}
   	}
   });
});

module.exports = router;
