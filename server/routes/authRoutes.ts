import { Router } from "express";
import { getUser } from "../handler/authHandler";

const router = Router();

router.get("/users", getUser);

export default router;
