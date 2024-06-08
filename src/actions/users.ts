"use server";
import { connectToDB } from "@/models/connection";
import { UserModel } from "@/models/users";
import { UserType } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllUsers = async (q: string, page: string) => {
  try {
    connectToDB();
    const user_per_page = 2;
    const regex = new RegExp(q, "i");
    const count = await UserModel.find({
      username: { $regex: regex },
    }).countDocuments();
    const users: UserType[] = await UserModel.find({
      username: { $regex: regex },
    })
      .limit(user_per_page) // make a limit for the users
      .skip(user_per_page * (parseInt(page) - 1)); // for example 2 * 0 so i wont skip any users but if its page 2 ill skip the first tow and show the second tow
    return { users, count };
  } catch (error) {
    throw new Error("faild to fetch all users");
  }
};
export const deleteUser = async (id: string) => {
  try {
    connectToDB();
    await UserModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("could'nt delete a user");
  }
  revalidatePath("/dashboard/users");
};
export const getOneUser = async (id: string) => {
  try {
    connectToDB();
    const user: UserType | null = await UserModel.findById(id);
    if (user) return user;
  } catch (error) {
    throw new Error("could'nt find a user");
  }
};
export const addUser = async (data: FormData) => {
  try {
    connectToDB();
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
  try {
    connectToDB();
    const userData = Object.fromEntries(data);
    // remove any key with an empty value or undifined
    // to prevent assign it to the database as an undifined faild
    Object.keys(userData).map(
      (key) =>
        (userData[key] === "" || userData[key] === undefined) &&
        delete userData[key]
    );
    await UserModel.findByIdAndUpdate(id, userData);
  } catch (error) {
    throw new Error("could'nt update a user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
