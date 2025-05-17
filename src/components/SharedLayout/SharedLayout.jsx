import React, { useContext } from "react";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ProductContext } from "../Products/ProductProvider";
const SharedLayout = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex flex-1">
        <main className="flex-1 bg-gray-100">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SharedLayout;
