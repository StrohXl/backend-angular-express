import { Router } from "express";
import TaskService from "./task.service";
const taskService = new TaskService();
const taskRouter = Router();
taskRouter.get("/", async (req, res) => {
  return res.send(await taskService.Get());
});
taskRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  return res.send(await taskService.GetOne(Number(id)));
});
taskRouter.post("/", async (req, res) => {
  const body = req.body;
  return res.send(await taskService.Post(body));
});
taskRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  return res.send(await taskService.Delete(Number(id)));
});
taskRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  return res.send(await taskService.Update(Number(id), body));
});

export default taskRouter;
