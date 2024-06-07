import { getAllProducts } from "@/actions/products";
import Pagination from "@/components/Pagination";
import ProductsTable from "@/components/ProductsTable";
import Search from "@/components/Search";
import { Metadata } from "next";

const Products = async () => {
  const products = await getAllProducts();
  return (
    <section className="bg-main-soft-bg mt-5">
      <Search
        placeHolder="Search For A Product"
        href="/dashboard/products/add"
      />
      {products.map((product) => (
        <ProductsTable product={product} key={product.id} />
      ))}
      <Pagination />
    </section>
  );
};
export default Products;
export const metadata: Metadata = {
  title: "products",
};