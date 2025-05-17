import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductContext } from "../Products/ProductProvider";
import { useContext } from "react"; 

const SideNav = ({ setCategoryFilter }) => {
  const {loading, setIsLoading} = useContext(ProductContext);
  const handleFilterClick = (category) => {
    if (loading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    setCategoryFilter(category);
  }
  
  return (
    <aside className="w-[180px] bg-gray-900 text-white p-6 hidden md:block">
      <nav className="flex flex-col gap-4 mt-16">
        <Link to="products" onClick={() => handleFilterClick("men's clothing")} ><button className="text-left hover:text-orange-300">Men's Clothing</button></Link>

        <Link to="products" onClick={() => handleFilterClick("women's clothing")}>Women's Clothing
        </Link>

        <Link to="products"
        onClick={() => handleFilterClick("jewelery")}
        >
          Jewelry
        </Link>
        
        <Link to="products"
        onClick={() => handleFilterClick("electronics")}>
          Electronics
        </Link>

    
      </nav>
    </aside>
  );
};

export default SideNav;
