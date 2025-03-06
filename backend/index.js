import express from "express";
import cors from "cors";

import { PORT } from "./config/env";
import { prisma } from "./lib/prisma";
import authRouter from "./routers/auth.router";
import userRouter from "./routers/user.router";
import AppError from "./lib/appError";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Can't find ${req.originalUrl} you requested from the server!`,
      404
    )
  );
});

app.get("/", (req, res) => {
  res.send("Welcome to the Volunteer Platform API");
});

app.listen(PORT, async () => {
  await prisma.$connect();
  console.log("Database connected");

  console.log(`Server is running on port http://localhost:${PORT}`);
});
