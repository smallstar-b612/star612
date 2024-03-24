const express = require('express');
const router = express.Router();

// 블로그 리스트
router.route('/')
    .get((req, res) => {
        res.render('../../frontend/pages/blog.html');
    })
    .post((req, res) => {
        res.send('본문 담기');
    })
    .put((req, res) => {
        res.send('본문 수정');
    })
    .delete((req, res) => {
        res.send('본문 삭제');
    })

module.exports = router;