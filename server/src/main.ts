import express, { Request, Response } from "express";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleware/errorHandler";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("*", notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`[server]: Listening on localhost:${PORT}`));
