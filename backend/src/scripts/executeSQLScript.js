const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const dbConfig = require('../config/dbConfig.js');

const pool = mysql.createPool(dbConfig);

// sql 스크립트 읽기와 입력 함수
async function executeSQLScript() {
    console.log("DB 스크립트 실행");
    try {
        const sqlScriptPath = path.join(__dirname, "../models/init_database.sql");
        const sqlScript = fs.readFileSync(sqlScriptPath, "utf8");
        const sqlStatements = sqlScript.split(";"); // 새미콜론

        const connection = await pool.getConnection();
        try {
            for (const sqlStatement of sqlStatements) {
                if (sqlStatement.trim()) {
                    await connection.query(sqlStatement); // 빈테이블 스킵
                }
            }
        } finally {
            connection.release();
        }

        console.log("DB 스키마 테이블생성 성공");

    } catch (error) {
        // 테이블이 이밎 존재하는 경우 스킵 후 메시지 출력
        if (error.code === 'ER_TABLE_EXISTS_ERROR') {
            console.log("DB 테이블이 이미 존재합니다.");
        } else {
            console.log("DB 생성 실패: ", error);
        }
    }
}

module.exports = executeSQLScript ;