const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-[10px] mt-5">
      <button
        disabled
        className="cursor-pointer disabled:cursor-not-allowed disabled:bg-[#ffffff77] px-[10px] py-[5px] rounded-sm bg-white  text-black"
      >
        Prev
      </button>
      <button className="cursor-pointer disabled:cursor-not-allowed disabled:bg-[#ffffff77] px-[10px] py-[5px] rounded-sm bg-white  text-black">
        Next
      </button>
    </div>
  );
};
export default Pagination;