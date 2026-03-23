import pg from 'pg';
import {
    DB_DATABASE,
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT
} from './config.js' 

//! realizar la conexión a la base de datos 

export const pool = new pg.Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})

