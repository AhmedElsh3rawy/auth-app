import { Router } from "express";
import { login, register } from "../controller/auth";
import { loginValidator, registerValidator } from "../middleware/validator";

const router = Router();

router.post("/register", registerValidator, register);

router.post("/login", loginValidator, login);

export default router;
