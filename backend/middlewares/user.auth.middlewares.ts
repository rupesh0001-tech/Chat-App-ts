import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

interface JwtPayload {
  _id: string;
}

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get token from cookie
    const token = req.cookies?.token;

    // validate token
    if (!token) {
      return res.status(401).json({ message: "Unauthorized, Token not found" });
    }

    // verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    // attach user id to req
    req.userId = decoded._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
