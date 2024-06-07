import mongoose from "mongoose";
const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    img: String,
    color: String,
    size: String,
  },
  {
    timestamps: true,
  }
);
export const ProductModel =
  mongoose.models?.products || mongoose.model("products", productsSchema);
