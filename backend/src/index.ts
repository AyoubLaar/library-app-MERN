import { Express } from "express";
import express from "express";
import "dotenv/config";

const PORT = process.env.PORT;
const app: Express = express();

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url} .`);
  next();
});

app.listen(PORT, () => {
  console.log("listening on port : " + PORT);
});
