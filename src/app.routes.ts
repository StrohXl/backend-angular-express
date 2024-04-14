import { Express } from "express";
import userRouter from "./modules/user/user.control";
import taskRouter from "./modules/task/task.control";
export default function routerApp(app: Express) {
  app.use("/user", userRouter);
  app.use("/task", taskRouter);
}
