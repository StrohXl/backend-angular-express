"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = __importDefault(require("./user.entity"));
class userService {
    GET() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_entity_1.default.find();
            console.log(users);
            return users;
        });
    }
    POST(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = user_entity_1.default.create(body);
            return yield user_entity_1.default.save(newUser);
        });
    }
    GETONE(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_entity_1.default.findOne({ where: { id } });
            if (!user) {
                return "not found";
            }
            return user;
        });
    }
    DELETE(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.GETONE(id);
            return yield user_entity_1.default.delete(id);
        });
    }
}
exports.default = userService;