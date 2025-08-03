import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AppLayout = () => {
  return (
    <div className="scrollbar-thin scrollbar">
      <Navbar />
      {/* Wrapping All Pages */}
      <main className="mt-26">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
