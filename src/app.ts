import express, { Request, Response, Express, json } from "express";
import cors from "cors";
import routerApp from "./app.routes";
import AppDataSource from "./data.source";
const port: number = 8000;

AppDataSource.initialize()
  .then(() =>{
    console.log("conexion exitosa")
    console.log(`http://localhost:${port}`)
  })
  .catch((error) => console.log(error));

const app: Express = express();
app.use(cors());
app.use(express.json());
routerApp(app);

app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola, Express con TypeScript!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
export default app;
