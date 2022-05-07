var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');

/* GET home page. */

// router.get('/devises/Banques', function(req, res){
//     res.render('/Banque.html', {}); 

// });
router.get('/devises/:currency', controller.devise);

router.get('/index.html', controller.index);
router.get('/', controller.index);


module.exports = router;