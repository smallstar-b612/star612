const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mysql = require('mysql2');

const userRouter = require('./src/api/routes/userRouter');
const shopRouter = require('./src/api/routes/shopRouter');
const blogRouter = require('./src/api/routes/blogRouter');
const chatRouter = require('./src/api/routes/chatRouter');
const boardRouter = require('./src/api/routes/boardRouter');

// Mysql DB 설정


// express 설정
const app = express();
const port = 3000;

// 세션 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'star1234',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000, // 1분
    }
}))

// 라우터 설정
app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/shop', shopRouter);
app.use('/board', boardRouter);
app.use('/chat', chatRouter);

// nunjucks 초기화
nunjucks.configure(path.join(__dirname, '../frontend/pages'), {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');

app.use(cookieParser());

// 정적파일 폴더
app.use('/static', express.static(path.join(__dirname,'../frontend/public/static')));
app.use('/images', express.static(path.join(__dirname,'../frontend/public/images')));
// app.use(bodyParser.json());

app.use(express.json());

// 라우터

app.get('/', (req, res) => {
    res.render('../../frontend/pages/index.html');  // Nunjucks 템플릿 사용
});

app.get('/about', (req, res) => {
    res.render('../../frontend/pages/about.html');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}, accessible from any IP`);
});