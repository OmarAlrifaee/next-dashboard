import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SmallSideBar from "@/components/SmallSideBar";
type Props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <Sidebar />
      <SmallSideBar />
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </section>
  );
};
export default DashboardLayout;
