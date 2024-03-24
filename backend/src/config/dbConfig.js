// DB config
const dbConfig = {
    host: "0.0.0.0",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "star"
};

module.exports = dbConfig;