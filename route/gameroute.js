const express = require('express');
var router = express.Router();
const gameCtrl = require('../controller/gamecontroller')
router.post('/createquiz',gameCtrl.createquiz)
module.exports = router