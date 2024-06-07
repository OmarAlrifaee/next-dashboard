import Pagination from "@/components/Pagination";
import ProductsTable from "@/components/ProductsTable";
import Search from "@/components/Search";
import { Metadata } from "next";

const Products = () => {
  return (
    <section className="bg-main-soft-bg mt-5">
      <Search
        placeHolder="Search For A Product"
        href="/dashboard/products/add"
      />
      <ProductsTable />
      <Pagination />
    </section>
  );
};
export default Products;
export const metadata: Metadata = {
  title: "products",
};
