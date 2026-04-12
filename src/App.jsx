import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home"
import Signup from "./pages/SignUp";
import Contact from "./pages/Contact";
// import About from "./Pages/About";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
