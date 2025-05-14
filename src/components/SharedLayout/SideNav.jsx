import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductContext } from "../Products/ProductProvider";

const SideNav = ({ setCategoryFilter }) => {
  
  
  return (
    <aside className="w-[180px] bg-gray-900 text-white p-6 hidden md:block">
      <nav className="flex flex-col gap-4 mt-16">
        <Link to="products" onClick={() => setCategoryFilter("men's clothing")} ><button className="text-left hover:text-orange-300">Men's Clothing</button></Link>

        <Link to="products" onClick={() => setCategoryFilter("women's clothing")}>Women's Clothing
        </Link>

        <Link to="products"
        onClick={() => setCategoryFilter("jewelery")}
        >
          Jewelry
        </Link>
        
        <Link to="products"
        onClick={() => setCategoryFilter("electronics")}>
          Electronics
        </Link>

    
      </nav>
    </aside>
  );
};

export default SideNav;
