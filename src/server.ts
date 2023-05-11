import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";

// --> create instance
const app: Application = express();

app.use(express.json());

// --> HTTP request logger middleware
app.use(morgan("dev"));

app.use(helmet());

app.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    message: "Hello, World!⭐",
  });
});

// --> start express
const PROT: number = 3000;
app.listen(PROT, () => {
  console.log(`Server is running on port: ${PROT}`);
});
