const express = require('express');
const router = express.Router();

// chat 기능
router.get('/', (req, res) => {
    res.render('../../frontend/pages/chat.html');
});

router.get('/chatset', (req, res) => {
    res.send('chat 설정')
} )

module.exports = router;