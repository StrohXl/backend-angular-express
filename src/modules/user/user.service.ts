import User from "./user.entity";

export default class userService {
  async GET() {
    const users = await User.find();
    console.log(users);
    return users;
  }
  async POST(body: any) {
    const newUser = User.create(body);
    return await User.save(newUser);
  }

  async GETONE(id: number) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return "not found";
    }
    return user;
  }
  async DELETE(id: number) {
    await this.GETONE(id);
    return await User.delete(id);
  }
}
