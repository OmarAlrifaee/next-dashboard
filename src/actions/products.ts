"use server";
import { connectToDB } from "@/models/connection";
import { ProductModel } from "@/models/products";
import { ProductType } from "@/types";

export const getAllProducts = async () => {
  connectToDB();
  try {
    const products: ProductType[] = await ProductModel.find();
    return products;
  } catch (error) {
    throw new Error("faild to fetch all products");
  }
};
export const deleteProductAction = async (id: string) => {
  connectToDB();
  try {
    await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("could'nt delete a product");
  }
};
export const getOneProduct = async (id: string) => {
  connectToDB();
  try {
    const product: ProductType | null = await ProductModel.findById(id);
    if (product) return product;
  } catch (error) {
    throw new Error("could'nt find a product");
  }
};
