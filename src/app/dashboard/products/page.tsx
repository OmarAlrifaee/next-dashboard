import { getAllProducts } from "@/actions/products";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import ProductRow from "@/components/ProductRow";
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
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {products.map((product) => (
            <Suspense key={product.id} fallback={<Loader />}>
              <ProductRow product={product} />
            </Suspense>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </section>
  );
};
export default Products;
export const metadata: Metadata = {
  title: "products",
};
