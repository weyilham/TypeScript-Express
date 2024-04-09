import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

export const auth = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Token not found" });
  }

  let secretKey = process.env.JWT_SECRET_KEY || "";
  const token: string = req.headers.authorization.split(" ")[1];

  try {
    const credentials: string | object = Jwt.verify(token, secretKey);

    if (credentials) {
      req.app.locals.credentials = credentials;
      next();
    }
    return res.send("Token Invalid");
  } catch (err) {
    return res.send(err);
  }
};
