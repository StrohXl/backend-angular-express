import { Express } from "express";
import userRouter from "./modules/user/user.control";
export default function routerApp(app: Express) {
  app.use("/user", userRouter);
}
