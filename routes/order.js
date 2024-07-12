var express = require('express');
var router = express.Router();


// '/'는 '/order'으로 매핑됨
router.get('/',  (req,res, next) => {
    console.log('here');
    // res.send('hello');
    res.render('order');
  });
  

  module.exports = router;