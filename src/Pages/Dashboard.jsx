import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Link to="/add-product"> Add Product</Link><br />
      <Link to="/products"> View Products</Link>
    </div>
  );
};

export default Dashboard;