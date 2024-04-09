import AuthController from "../controller/AuthController";
import BaseRoute from "./BaseRoute";
import validator from "../middlewares/AuthValidator";
import { auth } from "../middlewares/AuthMiddleware";

class AuthRoute extends BaseRoute {
  public routes(): void {
    this.router.post("/register", validator, AuthController.register);
    this.router.post("/login", AuthController.login);
    this.router.get("/profile", auth, AuthController.profile);
  }
}

export default new AuthRoute().router;
