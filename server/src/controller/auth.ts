import { Request, Response, NextFunction } from "express";
import { eq } from "drizzle-orm";
import { db } from "../database/db";
import { users } from "../database/schema";
import { asyncWrapper } from "../utils/asyncWrapper";
import { apiResponse } from "../utils/apiResponse";
import { CreatedUser, LoginUser } from "../types/user";
import { comparePasswords, hashPassword } from "../utils/password";
import APIError from "../utils/APIError";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

export const register = asyncWrapper(
  async (
    req: Request<{}, {}, CreatedUser>,
    res: Response,
    next: NextFunction,
  ) => {
    const createdUser: CreatedUser = req.body;
    const hashed = hashPassword(createdUser.password);
    const user = await db
      .insert(users)
      .values({
        username: createdUser.username,
        email: createdUser.email,
        password: hashed,
      })
      .returning();

    res
      .status(201)
      .json(apiResponse(201, "User has been created successfully.", user));
  },
);

export const login = asyncWrapper(
  async (
    req: Request<{}, {}, LoginUser>,
    res: Response,
    next: NextFunction,
  ) => {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, req.body.email));
    const matched = comparePasswords(req.body.password, user[0].password);
    if (!matched) {
      return next(new APIError("Invalid email or password.", 400));
    }
    const accessToken = await generateAccessToken(user[0].id);
    const refreshToken = await generateRefreshToken(user[0].id);

    res.cookie("token", refreshToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(200).json({ token: accessToken });
  },
);

const logout = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => { },
);
