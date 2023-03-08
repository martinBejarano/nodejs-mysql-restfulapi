import { createPool } from "mysql2/promise";
import { PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from './config.js'

const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    /*@ts-ignore*/
    port: DB_PORT,
    database: DB_DATABASE
})

export { pool };