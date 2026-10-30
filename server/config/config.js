import "dotenv/config";
import Pool from "pg";


// const pool = new Pool({
// });


export default {

    development: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'postgres',
        username: process.env.DB_USER || 'intern_user',
        password: process.env.DB_PASSWORD || 'postgres',
        dialect: 'postgres',
        logging: false,
        dialectOptions: process.env.DB_SSL === 'true' ? {
            ssl : {require: true, rejectUnauthorized: false}} : {}
    },

    production: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: 'postgres',
        logging: false,
        dialectOptions: process.env.DB_SSL === 'true' ? {
            ssl : {require: true, rejectUnauthorized: false}} : {}
    },
};



// export default Pool;