import { Dialect, } from 'sequelize'
import { Sequelize } from 'sequelize-typescript';
import dbConfig from '../config/dbConfig'
import userModel from './User.model'

const sequelize = new Sequelize(
    dbConfig.database as string,
    dbConfig.user as string,
    dbConfig.password,
    {
        host: dbConfig.host,
        models: [userModel] ,
        dialect: dbConfig.dialect as Dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    },
);

let db = {
    Sequelize,
    sequelize,
}

export default db

