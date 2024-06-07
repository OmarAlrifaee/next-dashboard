"use server";
import { connectToDB } from "@/models/connection";
import { ProductModel } from "@/models/products";
import { UserModel } from "@/models/users";
import { UserType } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllUsers = async () => {
  connectToDB();
  try {
    const users: UserType[] = await UserModel.find();
    return users;
  } catch (error) {
    throw new Error("faild to fetch all users");
  }
};
export const deleteUser = async (id: string) => {
  connectToDB();
  try {
    await UserModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("could'nt delete a user");
  }
  revalidatePath("/dashboard/users");
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
export const addUser = async (data: FormData) => {
  connectToDB();
  try {
    const userData = Object.fromEntries(data);
    const oldUser = await UserModel.findOne({ email: userData.email });
    if (oldUser) throw new Error("product already exist");
    const newUser = new UserModel(userData);
    await newUser.save();
  } catch (error) {
    throw new Error("could'nt add a new user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const updateUser = async (data: FormData, id: string) => {
  connectToDB();
  try {
    const userData = Object.fromEntries(data);
    await UserModel.findByIdAndUpdate(id, userData);
  } catch (error) {
    throw new Error("could'nt update a user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
