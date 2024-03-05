// userRouter.js
const express = require('express');
const router = express.Router();

// 사용자 정보 기본페이지
router.get('/', (req, res) => {
    res.send('사용자 간단 프로필');
});

router.get('/profil', (req, res) => {
    res.send('프로필/확인 변경');
});

router.get('/setting', (req, res) => {
    res.send('사용자 설정/확인 변경');
});

module.exports = router;