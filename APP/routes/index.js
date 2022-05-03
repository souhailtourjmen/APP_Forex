var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');

/* GET home page. */
router.get('/Devise.html', controller.devise);

router.get('/index.html', controller.index);
router.get('/', controller.index);


module.exports = router;