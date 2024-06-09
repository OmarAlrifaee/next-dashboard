import Card from "@/components/Card";
import Chart from "@/components/Chart";
import RightBar from "@/components/RightBar";
import Transactions from "@/components/Transactions";
import { Metadata } from "next";

const Dashboard = () => {
  return (
    <section className="flex gap-[20px] mt-[20px]">
      <div className="flex-[2] flex flex-col gap-[20px]">
        <div className="flex flex-wrap gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <RightBar />
      </div>
    </section>
  );
};
export default Dashboard;
export const metadata: Metadata = {
  title: "dashbaord",
};