import { Request, Response } from "express";
import IController from "./ControllerInterface";

let Data: any[] = [
  {
    id: 1,
    name: "Ilham Mauana",
  },
  {
    id: 2,
    name: "Deri Rivaldi",
  },
  {
    id: 3,
    name: "Tina Agustina",
  },
  {
    id: 4,
    name: "Erlangga",
  },
  {
    id: 5,
    name: "Firman",
  },
];
class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(Data);
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    Data.push({ id, name });
    return res.send("Data Berhasil ditambahkan");
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;
    let people = Data.find((item) => item.id == id);
    people.name = name;
    return res.send("data berhasil di update");
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    let people = Data.filter((item) => item.id != id);
    return res.send(people);
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    let people = Data.find((item) => item.id == id);
    return res.send(people);
  }
}

export default new UserController();
