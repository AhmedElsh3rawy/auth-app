import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

const PORT = process.env.PORT || 8080;

app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, World!");
});

app.listen(PORT, () => console.log(`[server]: Listening on port: ${PORT}`));
