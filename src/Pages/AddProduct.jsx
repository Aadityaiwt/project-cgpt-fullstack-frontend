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

    console.log("TOKEN:", token);

    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("category", form.category);
    data.append("image", form.image);

    const res = await API.post("/products", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Product Added");
    navigate("/products");

  } catch (error) {
    console.log(error.response?.data); // ?? main error yaha milega
    alert(error.response?.data?.message || "Error");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="price" onChange={handleChange} placeholder="Price" />
      <input name="category" onChange={handleChange} placeholder="Category" />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
