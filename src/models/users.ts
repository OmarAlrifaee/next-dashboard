import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
      min: 2,
      max: 10,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: String,
    isAdmin: {
      type: String,
      default: "false",
    },
    isActive: {
      type: String,
      default: "true",
    },
    phone: Number,
    address: String,
  },
  {
    timestamps: true,
  }
);
export const UserModel =
  mongoose.models?.users || mongoose.model("users", usersSchema);
