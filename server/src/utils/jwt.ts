import jwt from "jsonwebtoken";
import { dotenv } from "./dotenv";

export const generateAccessToken = async (sub: number) => {
  return await jwt.sign({ sub }, dotenv.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
};

export const generateRefreshToken = async (sub: number) => {
  return await jwt.sign({ sub }, dotenv.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyAccessToken = async (token: string) => {
  return await jwt.verify(token, dotenv.ACCESS_TOKEN_SECRET);
};

export const verifyRefreshToken = async (token: string) => {
  return await jwt.verify(token, dotenv.REFRESH_TOKEN_SECRET);
};
