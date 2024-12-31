import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/navbar";
import Footer from "../../pages/footer";

function Layout() {
  return (
    <div className="contiener">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
