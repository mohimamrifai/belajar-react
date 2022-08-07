// 1. impoert sequelize
import {Sequelize} from "sequelize";

// 2. impoert koneksi dari database.js
import db from '../config/Database.js';

// 3. memanggil fungsi sequelize
const {DataTypes} = Sequelize;

// 4. membuat  struktur tabel

// varibale nama tabel
const users = 'users';
// parameter 1 = nama Table
// parameter 2 = field Table
// parameter 3 = option
const User = db.define(users, {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    nim: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    // ini adalah option
    freezeTableName: true
});

// 5. membuat function untuk mengecek apakah suatu tabel ada pada database

export default User;

(async() => {
    await db.sync();
})();