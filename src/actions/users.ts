"use server";
import { connectToDB } from "@/models/connection";
import { UserModel } from "@/models/users";
import { UserType } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
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
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(
      userData?.password as string,
      salt
    );
    const newUser = new UserModel({ ...userData, password: hashedPassword });
    await newUser.save();
    console.log(newUser);
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
export const login = async (data: FormData) => {
  try {
    // connect to db
    connectToDB();
    const { email, password } = Object.fromEntries(data);
    // check if there is a user
    const user = await UserModel.findOne({ email });
    if (!user.email) {
      throw new Error("user not found");
    }
    // check if password is correct
    const isPasswordValid = await bcrypt.compare(
      password as string,
      user.password
    );
    if (!isPasswordValid) {
      throw new Error("password not valid");
    }
    // check if the user is admin
    if (!(user.isAdmin === "true")) {
      throw new Error("user is not admin");
    }
    // create a jwt
    const tokenData = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    cookies().set("token", token, { httpOnly: true });
    console.log("login successfully");
  } catch (error: any) {
    console.log(error.message);
  }
  redirect("/dashboard");
};
export const logout = async () => {
  try {
    // remove the token from the cookies
    cookies().set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    console.log("logged out successfully");
  } catch (error: any) {
    console.log(error.message);
  }
  redirect("/login");
};
export const getCurrentUser = async () => {
  try {
    connectToDB();
    const token = cookies().get("token")?.value;
    const decoded = jwt.verify(token!, process.env.TOKEN_SECRET!);
    const currentUser = await UserModel.findOne({ email: decoded?.email });
    return currentUser;
  } catch (error) {
    throw new Error("could'nt get the current user from token");
  }
};
