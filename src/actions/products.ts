"use server";
import { connectToDB } from "@/models/connection";
import { ProductModel } from "@/models/products";
import { ProductType } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllProducts = async (q: string, page: string) => {
  try {
    connectToDB();
    const regex = new RegExp(q, "i");
    const product_per_page = 2;
    const count = await ProductModel.find({
      title: { $regex: regex },
    }).countDocuments();
    const products: ProductType[] = await ProductModel.find({
      title: { $regex: regex },
    })
      .limit(product_per_page)
      .skip(product_per_page * (parseInt(page) - 1));
    return { products, count };
  } catch (error) {
    throw new Error("faild to fetch all products");
  }
};
export const deleteProduct = async (id: string) => {
  try {
    connectToDB();
    await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("could'nt delete a product");
  }
  revalidatePath("/dashboard/products");
};
export const getOneProduct = async (id: string) => {
  try {
    connectToDB();
    const product: ProductType | null = await ProductModel.findById(id);
    if (product) return product;
  } catch (error) {
    throw new Error("could'nt find a product");
  }
};
export const addProduct = async (data: FormData) => {
  try {
    connectToDB();
    const productData = Object.fromEntries(data);
    const oldProduct = await ProductModel.findOne({ title: productData.title });
    if (oldProduct) throw new Error("product already exist");
    const newProduct = new ProductModel(productData);
    await newProduct.save();
  } catch (error) {
    throw new Error("could'nt add a new product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const updateProduct = async (data: FormData, id: string) => {
  try {
    connectToDB();
    const productData = Object.fromEntries(data);
    // remove any key with an empty value or undifined
    // to prevent assign it to the database as an undifined faild
    Object.keys(productData).map(
      (key) =>
        (productData[key] === "" || productData[key] === undefined) &&
        delete productData[key]
    );
    await ProductModel.findByIdAndUpdate(id, productData);
  } catch (error) {
    throw new Error("could'nt update a product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
