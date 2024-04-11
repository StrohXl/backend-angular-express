import express, { Request, Response, Express, json } from "express";
import cors from "cors";

import routerApp from "./app.routes";
const app: Express = express();
const port: number = 8000;
app.use(cors());
app.use(json())
routerApp(app);

app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola, Express con TypeScript!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
