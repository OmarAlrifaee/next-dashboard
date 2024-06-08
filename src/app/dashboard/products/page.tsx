import { getAllProducts } from "@/actions/products";
import Pagination from "@/components/Pagination";
import ProductsTable from "@/components/ProductsTable";
import Search from "@/components/Search";
import { Metadata } from "next";
import { Suspense } from "react";
type Props = {
  searchParams: {
    q: string;
  };
};
const Products = async ({ searchParams }: Props) => {
  const products = await getAllProducts(searchParams.q || "");
  return (
    <section className="bg-main-soft-bg mt-5">
      <Search
        placeHolder="Search For A Product"
        href="/dashboard/products/add"
      />
      {products.map((product) => (
        <Suspense key={product.id}>
          <ProductsTable product={product} />
        </Suspense>
      ))}
      <Pagination />
    </section>
  );
};
export default Products;
export const metadata: Metadata = {
  title: "products",
};
