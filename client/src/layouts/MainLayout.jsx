import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#f7f4ec] dark:bg-[#0d1712]">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;