import { DataSource } from "typeorm";
import User from "./modules/user/user.entity";
import 'dotenv/config'
console.log(process.env.DB_HOST)
const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
export default AppDataSource