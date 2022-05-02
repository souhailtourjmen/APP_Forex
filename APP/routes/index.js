var express = require('express');
var router = express.Router();
const scraped = require('./Scraped');
/*run notre scraped*/
scraped.run();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;