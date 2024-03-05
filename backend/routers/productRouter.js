const express = require('express');
const router = express.Router();

// 제품 기본정보
router.get('/', (req, res) => {
    res.send('제품 기본정보');
});

router.get('/category', (req, res) => {
    res.send('제품 카테고리');
});

router.get('/price', (req, res) => {
    res.send('제품가격');
});

router.get('/person', (req, res) => {
    res.send('판매자');
});

module.exports = router;