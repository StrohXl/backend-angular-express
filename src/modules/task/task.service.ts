import Task from "./task.entity";
export default class TaskService {
  Get() {
    return Task.find();
  }
  async GetOne(id: number) {
    const task = await Task.findOne({ where: { id } });

    return task;
  }
  Post(body: any) {
    const newTask = Task.create(body);
    return Task.save(newTask);
  }
  async Delete(id: number) {
    await this.GetOne(id);
    Task.delete(id);
    return `task ${id} delete`;
  }
  async Update(id: number, body: any) {
    const task = await this.GetOne(id);
    Task.merge(task, body);
    if (task) {
      return Task.save(task);
    }
  }
}
