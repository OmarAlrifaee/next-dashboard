import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
type Props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <section>
      <Sidebar />
      <div>
        <Navbar />
        {children}
      </div>
    </section>
  );
};
export default DashboardLayout;
