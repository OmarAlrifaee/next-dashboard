"use server";
import { connectToDB } from "@/models/connection";
import { ProductModel } from "@/models/products";
import { ProductType } from "@/types";
import { redirect } from "next/navigation";

export const getAllProducts = async () => {
  connectToDB();
  try {
    const products: ProductType[] = await ProductModel.find();
    return products;
  } catch (error) {
    throw new Error("faild to fetch all products");
  }
};
export const deleteProduct = async (id: string) => {
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
export const addProduct = async (data: FormData) => {
  connectToDB();
  try {
    const productData = Object.fromEntries(data);
    const oldProduct = await ProductModel.findOne({ title: productData.title });
    if (oldProduct) throw new Error("product already exist");
    const newProduct = new ProductModel(productData);
    await newProduct.save();
  } catch (error) {
    throw new Error("could'nt add a new product");
  }
  redirect("/dashboard/products");
};
export const updateProduct = async (data: FormData, id: string) => {
  connectToDB();
  try {
    const productData = Object.fromEntries(data);
    await ProductModel.findByIdAndUpdate(id, productData);
  } catch (error) {
    throw new Error("could'nt update a product");
  }
  redirect("/dashboard/products");
};
