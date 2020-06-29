const mysql = require('mysql2');

// const config = {
// 	host: "localhost",
// 	user: "root",
// 	password: "ff2410pets",
// 	database: "wotv_local",
// 	connectionLimit: 5,
// 	connectTimeout: 10000, // 10 seconds
// 	acquireTimeout: 10000, // 10 seconds
// 	waitForConnections: true, // Default: true
// 	queueLimit: 0,
// };
// const pool = mysql.createPool(config);
// pool.query = util.promisify(pool.query);
// module.exports = pool;
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
});

module.exports = pool.promise();
