import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types";
import { deleteProduct } from "@/actions/products";
type Props = {
  product: ProductType;
}; //  correct the category faild
const ProductsTable = ({ product }: Props) => {
  return (
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
        <tr>
          <td>
            <div className="flex items-center justify-center gap-[10px]">
              <Image
                src={product.img || "/noproduct.jpg"}
                alt={product.title}
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              <span>{product.title}</span>
            </div>
          </td>
          <td>{product.desc}</td>
          <td>${product.price}</td>
          <td>{product.createdAt?.toLocaleDateString()}</td>
          <td>{product.stock}</td>
          <td>
            <div className="flex items-center justify-center gap-[20px]">
              <Link href={`/dashboard/products/${product.id}`}>
                <button className="bg-[teal] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                  View
                </button>
              </Link>
              <form
                action={async () => {
                  "use server";
                  deleteProduct(product.id);
                }}
              >
                <button className="bg-[crimson] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                  Delete
                </button>
              </form>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ProductsTable;
