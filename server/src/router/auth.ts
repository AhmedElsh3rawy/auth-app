import { Router } from "express";
import { register } from "../controller/auth";
import { registerValidator } from "../middleware/validator";

const router = Router();

router.post("/register", registerValidator, register);

export default router;
