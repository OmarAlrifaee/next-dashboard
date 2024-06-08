import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types";
import { deleteProduct } from "@/actions/products";
type Props = {
  product: ProductType;
}; //  correct the category faild
const ProductRow = ({ product }: Props) => {
  return (
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
              await deleteProduct(product.id);
            }}
          >
            <input type="hidden" name="id" value={product.id} />
            <button className="bg-[crimson] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  );
};
export default ProductRow;
