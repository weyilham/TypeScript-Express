import UserController from "../controller/UserController";
import { auth } from "../middlewares/AuthMiddleware";
import BaseRoute from "./BaseRoute";

class UserRoute extends BaseRoute {
  public routes(): void {
    this.router.get("/", auth, UserController.index);
    this.router.post("/", UserController.create);
    this.router.get("/:id", UserController.show);
    this.router.put("/:id", UserController.update);
    this.router.delete("/:id", UserController.delete);
  }
}

export default new UserRoute().router;
