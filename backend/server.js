const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const blogRouter = require('./routers/blogRouter');
const chatRouter = require('./routers/chatRouter');

// express 설정
const app = express();
const port = 3000;

// 세션 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'abcd1234',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000, // 1분
    }
}))

// 라우터 설정
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/blog', blogRouter);
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
    res.render('index.html');  // Nunjucks 템플릿 사용
});

app.get('/about', (req, res) => {
    res.render('about.html');
});

app.listen(port, () => {
    console.log(`Server port ${port} ready`);
})