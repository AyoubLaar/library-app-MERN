import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { Types } from "mongoose";
import { User } from "../types/user";

interface UserPayload extends JwtPayload {
  _id: Types.ObjectId;
}

interface UserRequest extends Request {
  user: UserPayload;
}

const JWT_SECRET: Secret = process.env.JWT_SECRET as string;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;
export function authenticate(
  req: UserRequest,
  res: Response,
  next: NextFunction
) {
  const Authorization = req.get("Authorization");

  if (!Authorization || !Authorization.startsWith("Bearer")) {
    return res.status(401).json({
      error:
        "Authorization header missing or wrong authorization method, use Bearer.",
    });
  }

  const token = Authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

export function createToken(user: User) {
  const payload = {
    _id: user._id, // or user._id depending on your schema
  };

  // Sign the token with a secret key and optional configuration
  const token = jwt.sign(payload, "your-secret-key", {
    expiresIn: JWT_EXPIRATION, // Token expiration time (e.g., 1 hour)
  });

  return token;
}
