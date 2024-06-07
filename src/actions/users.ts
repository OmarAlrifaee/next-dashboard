"use server";
import { connectToDB } from "@/models/connection";
import { UserModel } from "@/models/users";
import { UserType } from "@/types";

export const getAllUsers = async () => {
  connectToDB();
  try {
    const users: UserType[] = await UserModel.find();
    return users;
  } catch (error) {
    throw new Error("faild to fetch all users");
  }
};
export const deleteUserAction = async (id: string) => {
  connectToDB();
  try {
    await UserModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("could'nt delete a user");
  }
};
export const getOneUser = async (id: string) => {
  connectToDB();
  try {
    const user: UserType | null = await UserModel.findById(id);
    if (user) return user;
  } catch (error) {
    throw new Error("could'nt find a user");
  }
};
