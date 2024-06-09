import { getAllProducts } from "@/actions/products";
import Pagination from "@/components/Pagination";
import ProductRow from "@/components/ProductRow";
import Search from "@/components/Search";
import { Metadata } from "next";
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
            <td className="p-3">Title</td>
            <td className="p-3">Description</td>
            <td className="p-3">Price</td>
            <td className="p-3">Created At</td>
            <td className="p-3">Stock</td>
            <td className="p-3">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
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
