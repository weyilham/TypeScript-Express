import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const Passwordhash: string = await Authentication.PasswordHash(password);

    await db.user.create({
      username,
      password: Passwordhash,
    });

    return res.send("register success");
  };
  login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    //cek user
    const user = await db.user.findOne({ where: { username } });

    if (!user) {
      return res.send("user not found");
    }
    //cek password
    const compare = await Authentication.PasswordCompare(
      password,
      user.password
    );

    //generate token
    if (compare) {
      const token = Authentication.tokenGenerate(
        user.id,
        user.username,
        user.password
      );
      return res.send({ token });
    }
    return res.send("login failed");
  };

  profile = (req: Request, res: Response): Response => {
    return res.send(req.app.locals.credentials);
  };
}

export default new AuthController();
