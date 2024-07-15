var express = require('express');
var router = express.Router();

var logger = require('../logger'); // logger 파일을 가져옴

router.get('/', (req,res) => {
    logger.info(`Request received for URL: ${req.originalUrl}`);
    res.render('order_item');
})


router.post('/add-item', (req, res) => {
    const { menuName, menuPrice, category } = req.body;
    logger.info(`메뉴 아이템 추가: ${menuName}, 가격: ${menuPrice}, 카테고리: ${category}`);

    // 데이터베이스에 삽입하기 전에 중복 검사 SQL 쿼리 작성
    const checkSql = 'SELECT COUNT(*) as count FROM order_item WHERE item_name = ?';
    const values = [menuName];

    req.db.query(checkSql, values, (err, result) => {
        if (err) {
            console.error('데이터 검사 중 오류 발생: ', err);
            res.status(500).json({ message: '데이터베이스 오류' });
            return;
        }

        // 중복된 항목이 있으면
        console.log(result)
        if (result[0].count > 0) {
            res.status(400).json({ message: '이미 존재하는 아이템입니다' });
            return;
        }

        // 데이터베이스에 삽입하는 SQL 쿼리 작성
        const insertSql = 'INSERT INTO order_item (item_name, item_price, category) VALUES (?, ?, ?)';
        const insertValues = [menuName, menuPrice, category];

        req.db.query(insertSql, insertValues, (err, result) => {
            if (err) {
                console.error('데이터 삽입 중 오류 발생: ', err);
                res.status(500).json({ message: '데이터베이스 오류' });
                return;
            }
            console.log('데이터 삽입 성공: ', result);
            res.json({ message: '메뉴 아이템이 성공적으로 추가되었습니다' });
        });
    });
});



module.exports = router;