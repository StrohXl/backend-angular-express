import { DataSource } from "typeorm";
import User from "./modules/user/user.entity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "spd00ankama",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
export default AppDataSource