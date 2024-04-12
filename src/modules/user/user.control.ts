import { Router } from "express";
import { Request, Response } from "express";
import userService from "./user.service";
const userRouter = Router();
const service = new userService();
userRouter.get("/", async (req: Request, res: Response) => {
  return res.send(await service.GET());
});
userRouter.post("/", async (req: Request, res: Response) => {
  return res.send(await service.POST(req.body));
});
userRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  return res.send(await service.GETONE(Number(id)));
});
userRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  return res.send(await service.DELETE(Number(id)));
});
export default userRouter;
