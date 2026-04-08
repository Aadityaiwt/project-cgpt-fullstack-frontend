import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Link
          to="/add-product"
          className="bg-blue-500 text-white p-6 rounded-xl shadow hover:bg-blue-600 transition"
        >
          Add Product
        </Link>

        <Link
          to="/products"
          className="bg-green-500 text-white p-6 rounded-xl shadow hover:bg-green-600 transition"
        >
          View Products
        </Link>

      </div>

    </div>
  );
};

export default Dashboard;
