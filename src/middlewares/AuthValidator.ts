import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validator = [
  check("username").isString().withMessage("username must be string"),
  check("password").isLength({ min: 6 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({ errors: errors.array() });
    }
    next();
  },
];

export default validator;
