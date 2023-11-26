import express from 'express';
import wordRouter from './word-router.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/", wordRouter);
app.use("/", (req,res) => res.send("try /api/check/:word or /api/includes/:letters"));

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
