const { Pool } = require('pg');

const pool = new Pool({
    database: 'dead_celeb',
    port:5432
});

// const pool = new Pool({
//     user: process.env.DATABASE_USER, 
//     database: process.env.DATABASE_NAME,  
//     password: process.env.DATABASE_USER
// });

// const pool = new Pool({
//     database:'chess_players',
//     port:5432
//   });

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: process.env.NODE_ENV === 'dev' ?  false : {
//         rejectUnauthorized: false
//     }
// });

module.exports = pool

