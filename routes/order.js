var express = require('express');
var router = express.Router();


var logger = require('../logger'); // logger 파일을 가져옴

// '/'는 '/order'으로 매핑됨
router.get('/',  (req,res, next) => {
    console.log('here');
    // res.send('hello');
    res.render('order');
  });


router.post('/list', (req,res) => {
  logger.info(`Request received for URL: ${req.originalUrl}`);
  
  const { selectedCategory } = req.body
  
  const sql = 'SELECT item_name, item_price FROM order_item WHERE category = ?';
  const value = [selectedCategory];

  req.db.query(sql, value, (err, result) => {
    if (err){
      console.error('데이터 검사 중 오류 발생',  err);
      res.status(500).json({message : '데이터베이스 오류'});
      return;
    }
    //조회된 데이터 pug로 전해주기
    // 조회된 데이터를 Pug 템플릿으로 전송
    // res.render('orderitem_list', { items: result });
    res.json(result); // 조회된 데이터를 JSON으로 응답
  })
})
  

  module.exports = router;