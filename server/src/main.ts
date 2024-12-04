import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorHandler";
import authRouter from "./router/auth";
import { dotenv } from "./utils/dotenv";

const app = express();

const PORT = dotenv.PORT;

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: dotenv.CORS_ORIGIN }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api/auth", authRouter);

app.use("*", notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`[server]: Listening on localhost:${PORT}`));
