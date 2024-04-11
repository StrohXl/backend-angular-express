import { Router } from "express";
import { Request, Response } from "express";
import userService from "./user.service";
const userRouter = Router();
const service = new userService();
userRouter.get("/", (req: Request, res: Response) => {
  return res.send(service.GET());
});
userRouter.post("/", (req: Request, res: Response) => {
  return res.send(service.POST(req.body));
});
export default userRouter;
