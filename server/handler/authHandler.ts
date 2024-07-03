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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    return res.send("Invalid email or password");
  }

  res.send("OK");
};
