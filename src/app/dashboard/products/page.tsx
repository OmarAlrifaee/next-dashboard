import { getAllProducts } from "@/actions/products";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import ProductsTable from "@/components/ProductsTable";
import Search from "@/components/Search";
import { Metadata } from "next";
import { Suspense } from "react";
type Props = {
  searchParams: {
    q: string;
    page: string;
  };
};
const Products = async ({ searchParams }: Props) => {
  const { count, products } = await getAllProducts(
    searchParams.q || "",
    searchParams.page || "1"
  );
  return (
    <section className="bg-main-soft-bg mt-5">
      <Search
        placeHolder="Search For A Product"
        href="/dashboard/products/add"
      />
      {products.map((product) => (
        <Suspense key={product.id} fallback={<Loader />}>
          <ProductsTable product={product} />
        </Suspense>
      ))}
      <Pagination count={count} />
    </section>
  );
};
export default Products;
export const metadata: Metadata = {
  title: "products",
};
