const Database = require('better-sqlite3');
const db = new Database('parque.db', { verbose: console.log });

// create table
db.exec("CREATE TABLE IF NOT EXISTS `SPTOT` (`Full Type` TEXT, `Serial` TEXT, `Add data` TEXT, `c/n` TEXT, `Unit` TEXT, `Remarks` TEXT, `Location` TEXT, `Date` TEXT, `Country` TEXT, `Operator` TEXT, `Basic Type` TEXT, `Oper` TEXT, `Status` TEXT, `New` TEXT)");
