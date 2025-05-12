import React, { useContext } from "react";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ProductContext } from "../Products/ProductProvider";
const SharedLayout = () => {
  const {setCategoryFilter} = useContext(ProductContext)
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex flex-1">
        <SideNav setCategoryFilter={setCategoryFilter} />
        <main className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SharedLayout;
