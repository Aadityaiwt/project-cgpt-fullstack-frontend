import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("name", form.name);
      data.append("price", form.price);
      data.append("category", form.category);
      data.append("image", form.image);

      await API.post("/products", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product Added");
      navigate("/products");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Add Product</h2>

        <input
          name="name"
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-3 rounded-lg"
        />

        <input
          name="price"
          onChange={handleChange}
          placeholder="Price"
          className="border p-3 rounded-lg"
        />

        <input
          name="category"
          onChange={handleChange}
          placeholder="Category"
          className="border p-3 rounded-lg"
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          Add Product
        </button>
      </form>

    </div>
  );
};

export default AddProduct;