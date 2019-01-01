var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection= mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'user'
});

router.post('/', function(req, res, next) {
  res.send({message:'Testing to get the data'});
});

module.exports = router;
