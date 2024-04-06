import { Router, Request, Response } from "express";
import IRoute from "./RouteInterface";
import UserController from "../controller/UserController";

class UserRoute implements IRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/", UserController.index);

    this.router.post("/", UserController.create);
  }
}

export default new UserRoute().router;
