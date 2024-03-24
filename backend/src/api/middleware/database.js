// database.js

const mysql2 = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');

// 데이터베이스 연결 풀 생성
const pool = mysql2.createPool(dbConfig);

// 각 요청에 데이터베이스 연결을 제공하는 미들웨어 함수
