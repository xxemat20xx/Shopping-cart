// ErrorPage.jsx

import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-orange-500 to-blue-500 p-6">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center space-y-6"
      >
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-500">
          404
        </h1>
        <p className="text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
          <button className="flex items-center mx-auto gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-900 text-white rounded-lg shadow transition cursor-pointer"> 
            
            <Home className="w-5 h-5" />
            Go Home
          </button>
        </Link>
      </Motion.div>
    </div>
  );
}
