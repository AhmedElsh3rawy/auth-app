import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import APIError from "../utils/APIError";
import { registerSchema, loginSchema } from "../utils/validationSchema";

export const registerValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = await registerSchema.safeParseAsync(req.body);
  if (!result.success) {
    return next(new APIError(fromZodError(result.error), 400));
  }
  req.body = result.data;
  next();
};

export const loginValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return next(new APIError(fromZodError(result.error), 400));
  }
  req.body = result.data;
  next();
};
