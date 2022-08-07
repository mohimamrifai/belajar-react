// 1. membuat koneksi
// 2. import sequelize
import Sequelize from "sequelize";

// variable database
const db_name = 'database';
const db_username = 'root';
const db_password = '';

// 3. membuat database
const db = new Sequelize(db_name, db_username, db_password, {
    host: 'localhost',
    dialect: 'mysql'
} );

// expoert database
export default db;