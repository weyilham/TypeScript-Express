import { Router } from "express";
import IRoute from "./RouteInterface";

abstract class BaseRoute implements IRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  abstract routes(): void;
}

export default BaseRoute;
