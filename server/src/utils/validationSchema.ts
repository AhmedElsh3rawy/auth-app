import { z } from "zod";
import { db } from "../database/db";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";

export const registerSchema = z.object({
  username: z.string({ message: "Username is required." }).min(2, {
    message: "Username must contain at least 2 characters.",
  }),
  email: z
    .string({ message: "Email is required." })
    .email({ message: "Invalid email address." })
    .refine(
      async (email) => {
        const res = db.select().from(users).where(eq(users.email, email));
        return res === null;
      },
      { message: "Email is used by another user." },
    ),
  password: z
    .string({ message: "Password is required." })
    .min(8, { message: "Password must contain at least 8 characters." })
    .max(20, { message: "Password must contain at most 20 characters." }),
});

export const loginSchema = z.object({
  email: z
    .string({ message: "Email is required." })
    .email({ message: "Invalid email address." }),
  password: z
    .string({ message: "Password is required." })
    .min(8, { message: "Password must contain at least 8 characters." })
    .max(20, { message: "Password must contain at most 20 characters." }),
});
