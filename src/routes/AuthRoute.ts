import AuthController from "../controller/AuthController";
import BaseRoute from "./BaseRoute";

class AuthRoute extends BaseRoute {
  public routes(): void {
    this.router.post("/register", AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}
