import { Request, Response, NextFunction } from "express";
import APIError from "../utils/APIError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  res.status(err.status || 500).json({
    status: err.statusText,
    message: err.message,
    statusCode: err.statusCode || 500,
    stack: err.statck,
  });
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(new APIError("Resource not found", 400));
};
