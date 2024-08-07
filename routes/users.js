var express = require('express');
var router = express.Router();

const logger = require('../logger')

/* GET users listing. */
router.get('/', function(req, res, next) {
  logger.info(`Request received for URL: ${req.originalUrl}`);
  // res.send('respond with a resource');
  res.render('users');
});

router.post('/profile', (req, res) => {
  const users = req.body
  const username = users.userName
  const useraddress = users.useraddress
  const userphone = users.userphone
  
  const sql = 'SELECT name from users WHERE name = ?';
  const value = [username];
  req.db.query(sql, value, (err, result) => {
      if (err){
        console.log("데이터 검사 중 오류 발생", err);
        res.status(500).json({message : '데이터베이스 오류'});
        return ; 
      }

      console.log(result);
      //사용자 존재하지 않으니 DB에 저장
      if(result.length === 0)
      {
        const insertSql = 'INSERT INTO users(name, phone, address) VALUES (?,?,?)';
        const insertValues = [username, useraddress, userphone];

        req.db.query(insertSql, insertValues, (err, result) => {
          if (err){
            console.log("데이터 삽입 중 오류발생", err);
            res.status(500).json({message : "데이터베이스 삽입 오류"});
            return ;
          }

          res.json("사용자가 등록되었습니다.");
        })
      }
      else//이미 등록된 사용자 
      {
          // console.log("데이터 삽입 중 오류발생", err);
          res.status(400).json({message : "이미 등록된 사용자입니다."});
          return ;
      }
  })
})

module.exports = router;
