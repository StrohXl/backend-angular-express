"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_control_1 = __importDefault(require("./modules/user/user.control"));
function routerApp(app) {
    app.use("/user", user_control_1.default);
}
exports.default = routerApp;
