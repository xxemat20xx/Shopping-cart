import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="w-[180px] bg-gray-900 text-white p-6 hidden md:block">
 
      <nav className="flex flex-col gap-4 mt-16">
        <NavLink to="/" className="hover:text-orange-300">Men's Clothing</NavLink>
        <NavLink to="/" className="hover:text-orange-300">Women's Clothing</NavLink>
        <NavLink to="/" className="hover:text-orange-300">Jewelry</NavLink>
        <NavLink to="/" className="hover:text-orange-300">Electronics</NavLink>
      </nav>
    </aside>
  );
};

export default SideNav;
