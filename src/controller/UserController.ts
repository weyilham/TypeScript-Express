import { Request, Response } from "express";
import IController from "./ControllerInterface";

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send("Ini adalah Route Index");
  }
  create(req: Request, res: Response): Response {
    return res.send(req.body);
  }
  update(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  show(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
}

export default new UserController();
