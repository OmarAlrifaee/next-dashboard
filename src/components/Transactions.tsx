import TransactionsTr from "./TransactionsTr";

const Transactions = () => {
  return (
    <div className="bg-main-soft-bg p-[10px] rounded-md">
      <h2 className="mb-[20px] font-[300] text-soft-text">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <TransactionsTr status="done" />
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;
