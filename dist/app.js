"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_routes_1 = __importDefault(require("./app.routes"));
const app = (0, express_1.default)();
const port = 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, app_routes_1.default)(app);
app.get("/", (req, res) => {
    res.send("¡Hola, Express con TypeScript!");
});
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
exports.default = app;
