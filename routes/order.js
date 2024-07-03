var express = require('express');
var router = express.Router();

// router.get('/login', (req,res, next) =>{
//     console.log('here');
//     // res.render('login');
//     res.send('hello');
// });

// module.exports = router;

// '/'는 '/login'으로 매핑됨
router.get('/',  (req,res, next) => {
    console.log('here');
    // res.send('hello');
    res.render('order');
  });
  
// router.get('/hel',  (req,res, next) => {
//     console.log('here');
//     res.send('hello2');
//   });
  module.exports = router;