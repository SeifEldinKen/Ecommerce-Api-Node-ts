import express, { Application, Request, Response } from "express";

// --> create instance
const app: Application = express();

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
