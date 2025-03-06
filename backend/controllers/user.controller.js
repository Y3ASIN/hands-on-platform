import { catchAsync } from "../lib/catchAsync";
import { prisma } from "../lib/prisma";

export const getUsers = catchAsync(async (req, res, next) => {
  const users = await prisma.user.findMany();
  return res.json(users);
});

export const getUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }

  const { password, ...userWithoutPassword } = user;

  return res.json(userWithoutPassword);
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, skills, causes } = req.body;

  const user = await prisma.user.update({
    where: { id },
    data: { name, email, skills, causes },
  });

  const { password, ...userWithoutPassword } = user;

  return res.json(userWithoutPassword);
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id },
  });
  return res.json({ message: "User deleted successfully!" });
});
