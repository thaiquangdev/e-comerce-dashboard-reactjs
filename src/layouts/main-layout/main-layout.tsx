import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        {<Outlet />}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
