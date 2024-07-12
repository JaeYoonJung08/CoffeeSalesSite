var express = require('express');
var router = express.Router();

var logger = require('../logger'); // logger 파일을 가져옴

router.get('/', (req,res) => {
    logger.info(`Request received for URL: ${req.originalUrl}`);
    res.render('order_item');
})




module.exports = router;