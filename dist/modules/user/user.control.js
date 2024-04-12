"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("./user.service"));
const userRouter = (0, express_1.Router)();
const service = new user_service_1.default();
userRouter.get("/", async (req, res) => {
    return res.send(await service.GET());
});
userRouter.post("/", async (req, res) => {
    return res.send(await service.POST(req.body));
});
userRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    return res.send(await service.GETONE(Number(id)));
});
userRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    return res.send(await service.DELETE(Number(id)));
});
exports.default = userRouter;
