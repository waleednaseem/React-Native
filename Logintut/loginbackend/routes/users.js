var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection= mysql.createConnection({
	host:'192.168.1.101',
	user:'root',
	password:'root',
	database:'reactnative'
});

router.post('/', function(req, res, next) {
  res.send({message:'Testing to get the data'});
});

module.exports = router;
