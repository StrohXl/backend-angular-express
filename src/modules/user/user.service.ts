import AppDataSource from "../../data.source";
import User from "./user.entity";

export default class userService {
  async GET() {
    const users = await User.find()
    console.log(users)
    return []
  }
  async POST(body: any) {
    const user = new User()    
    user.firstName = body.firstName
    user.lastName = body.lastName
    user.email = body.email
    user.password = body.password
    console.log( await user.save())
    return user
  }
}
