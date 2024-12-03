import { Request, Response, NextFunction } from "express";
import { db } from "../database/db";
import { users } from "../database/schema";
import { asyncWrapper } from "../utils/asyncWrapper";
import { apiResponse } from "../utils/apiResponse";
import { CreatedUser } from "../types/user";
import { hashPassword } from "../utils/password";

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
      .json(apiResponse(201, "User has been created successfully", user));
  },
);

const login = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const logout = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {},
);
