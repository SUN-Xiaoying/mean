var express = require('express');
var router = express.Router();

/*===== Self-made =====*/
// Seperate the controller logic from route definitions
const ctrlMain = require('../controllers/main');
router.get('/', ctrlMain.index);

/*=====================*/
module.exports = router;
