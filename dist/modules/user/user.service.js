"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = __importDefault(require("./user.entity"));
class userService {
    async GET() {
        const users = await user_entity_1.default.find();
        console.log(users);
        return users;
    }
    async POST(body) {
        const newUser = user_entity_1.default.create(body);
        return await user_entity_1.default.save(newUser);
    }
    async GETONE(id) {
        const user = await user_entity_1.default.findOne({ where: { id } });
        if (!user) {
            return "not found";
        }
        return user;
    }
    async DELETE(id) {
        await this.GETONE(id);
        return await user_entity_1.default.delete(id);
    }
}
exports.default = userService;
