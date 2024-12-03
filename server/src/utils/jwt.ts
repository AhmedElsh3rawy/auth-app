import jwt from "jsonwebtoken";

export const generateAccessToken = async (sub: number) => {
  return await jwt.sign({ sub }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: "30s",
  });
};

export const generateRefreshToken = async (sub: number) => {
  return await jwt.sign({ sub }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: "7d",
  });
};

export const verifyAccessToken = async (token: string) => {
  return await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
};

export const verifyRefreshToken = async (token: string) => {
  return await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string);
};
