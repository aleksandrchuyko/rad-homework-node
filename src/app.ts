import express, { NextFunction, Request, Response , ErrorRequestHandler} from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from "cors";

const notesRouter = require("./routes/api/notes");

dotenv.config();

const newApp = express();

const formatsLogger = newApp.get("env") === "development" ? "dev" : "short";

newApp.use(morgan(formatsLogger));
newApp.use(cors());
newApp.use(express.json());

newApp.use("/api/notes", notesRouter);

newApp.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

newApp.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json( "server error");
});

module.exports = newApp;
