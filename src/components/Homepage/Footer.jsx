import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Logo + Home */}
        <div className="text-xl font-semibold flex items-center gap-2">
          <FontAwesomeIcon icon={faCartShopping} className="text-orange-500" />
          <Link to="/" className="hover:underline text-orange-400">Shopping Cart</Link>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>Email: support@shoppingcart.fake</p>
          <p>Phone: +63 900 123 4567</p>
          <p>Address: 1234 Fake St, Manila, Philippines</p>
        </div>

        {/* FAQs */}
        <div>
          <h4 className="text-lg font-semibold mb-2">FAQs</h4>
          <p>📦 How long is shipping?</p>
          <p>🛠 Can I return a product?</p>
          <p>💳 What payment methods are accepted?</p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Raymart's Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
