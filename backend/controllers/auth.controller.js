import jwt from "jsonwebtoken";
import { catchAsync } from "../lib/catchAsync";
import { prisma } from "../lib/prisma";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env";

export const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, skills, causes } = req.body;

  // user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists!" });
  }

  if (!name || !email || !password || !skills || !causes) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // hash password
  const hashedPassword = await Bun.password.hash(password);

  // create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      skills,
      causes,
    },
  });

  // generate token
  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  // send response
  return res.status(201).json({
    data: {
      user,
      token,
    },
  });
});

export const signin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // user exists
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ message: "User not found!" });
  }

  // check password
  const isPasswordValid = await Bun.password.verify(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid password!" });
  }

  // generate token
  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  // send response
  return res.status(200).json({
    data: {
      user,
      token,
    },
  });
});
