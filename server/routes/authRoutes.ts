import { Router } from "express";
import { login } from "../handler/authHandler";

const router = Router();

router.post("/login", login);

export default router;
