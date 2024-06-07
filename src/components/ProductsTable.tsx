import Link from "next/link";
import Image from "next/image";
const ProductsTable = () => {
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
                src={"/noproduct.jpg"}
                alt=""
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              <span>laptop</span>
            </div>
          </td>
          <td>desc</td>
          <td>$200</td>
          <td>13.01.2002</td>
          <td>72</td>
          <td>
            <div className="flex items-center justify-center gap-[20px]">
              <Link href={"/"}>
                <button className="bg-[teal] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                  View
                </button>
              </Link>
              <button className="bg-[crimson] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ProductsTable;
