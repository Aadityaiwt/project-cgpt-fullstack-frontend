import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Pages/AddProduct";
import ProductList from "./Pages/ProductList";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home"
import Signup from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;