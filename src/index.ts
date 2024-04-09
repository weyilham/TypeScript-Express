import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import UserRoute from "./routes/UserRoute";
import AuthRoute from "./routes/AuthRoute";
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv.config();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Ini adalah Halaman Home!");
    });

    this.app.use("/api/v1/users", UserRoute);
    this.app.use("/api/v1/auth", AuthRoute);
  }
}

const app = new App().app;
const port: number = 3000;

app.listen(port, () => {
  console.log("Server is running on port http://localhost:" + port);
  console.log("Press Ctrl+C to quit");
});
