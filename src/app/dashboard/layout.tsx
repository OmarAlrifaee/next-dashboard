import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
type Props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
      </div>
    </section>
  );
};
export default DashboardLayout;
