import { DataSource } from "typeorm";
import User from "./modules/user/user.entity";
import "dotenv/config";
import Task from "./modules/task/task.entity";
const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User,Task],
  subscribers: [],
  migrations: ['./src/migrations/*.ts'],
});
export default AppDataSource;
