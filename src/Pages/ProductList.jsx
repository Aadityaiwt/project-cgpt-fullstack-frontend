import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ?? Edit state
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  // ?? Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await API.get("/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  // ?? DELETE
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(products.filter((p) => p._id !== id));
      alert("Deleted Successfully");

    } catch (error) {
      console.log(error.response?.data);
      alert("Delete Failed");
    }
  };

  // ?? EDIT START
  const startEdit = (p) => {
    setEditId(p._id);
    setEditForm({
      name: p.name,
      price: p.price,
      category: p.category,
    });
  };

  // ?? UPDATE
  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(`/products/${id}`, editForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // UI update
      setProducts(
        products.map((p) =>
          p._id === id ? { ...p, ...editForm } : p
        )
      );

      setEditId(null);
      alert("Updated Successfully");

    } catch (error) {
      console.log(error.response?.data);
      alert("Update Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>

      {products.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            width: "250px",
            borderRadius: "10px",
          }}
        >
          {/* ?? CONDITIONAL EDIT UI */}
          {editId === p._id ? (
            <div>
              <input
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                placeholder="Name"
              />

              <input
                value={editForm.price}
                onChange={(e) =>
                  setEditForm({ ...editForm, price: e.target.value })
                }
                placeholder="Price"
              />

              <input
                value={editForm.category}
                onChange={(e) =>
                  setEditForm({ ...editForm, category: e.target.value })
                }
                placeholder="Category"
              />

              <div style={{ marginTop: "10px" }}>
                <button onClick={() => handleUpdate(p._id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <h3>{p.name}</h3>
              <p>Price: {p.price}</p>
              <p>Category: {p.category}</p>

              <img src={p.image} width="120" />

              <div style={{ marginTop: "10px" }}>
                <button onClick={() => startEdit(p)}>Edit</button>

                <button
                  onClick={() => handleDelete(p._id)}
                  style={{ marginLeft: "10px", background: "red", color: "white" }}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
