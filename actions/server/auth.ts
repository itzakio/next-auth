"use server";
import bcrypt from "bcryptjs";
interface PayloadData {
  name: string;
  email: string;
  password: string;
}

import { dbConnect } from "@/lib/dbConnet";

export const postUser = async (payload: PayloadData) => {
  const isUserExist = await dbConnect("users").findOne({
    email: payload.email,
  });
  if (isUserExist) {
    return {
      success: false,
      message: "User already exist",
    };
  }
  const hashPassword = await bcrypt.hash(payload.password, 10);

  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashPassword,
  };

  const result = await dbConnect("users").insertOne(newUser);
  console.log(result);
  if (result.acknowledged) {
    return {
      success: true,
      message: `User created with id: ${result.insertedId.toString()}`,
    };
  }
};
