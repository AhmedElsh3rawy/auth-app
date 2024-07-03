import { Request, Response } from "express";

const users = [
  {
    email: "john@example.com",
    password: "abc*d*efg",
  },
  {
    email: "sara@example.com",
    password: "123vvv456",
  },
];

export const getUser = async (req: Request, res: Response) => { };
