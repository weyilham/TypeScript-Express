import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Authentication {
  public static PasswordHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  public static PasswordCompare(
    text: string,
    compareText: string
  ): Promise<boolean> {
    return bcrypt.compare(text, compareText);
  }

  public static tokenGenerate(
    id: number,
    username: string,
    password: string
  ): string {
    const token = jwt.sign(
      { id, username, password },
      process.env.JWT_SECRET_KEY || ""
    );

    return token;
  }
}

export default Authentication;
