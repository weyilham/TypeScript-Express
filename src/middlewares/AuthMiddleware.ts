import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  const auth: boolean = false;

  if (auth) {
    next();
  }
  return res.send({ message: "unauthorized" });
};
