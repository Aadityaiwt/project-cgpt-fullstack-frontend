import React, { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    const token = localStorage.getItem("token");

    await API.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setProducts(products.filter((p) => p._id !== id));
  };

  const startEdit = (p) => {
    setEditId(p._id);
    setEditForm({
      name: p.name,
      price: p.price,
      category: p.category,
    });
  };

const handleUpdate = async (id) => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    // ? ? instant UI update (optimistic)
    setProducts((prev) =>
      prev.map((p) =>
        p._id === id
          ? {
              ...p,
              name: editForm.name,
              price: editForm.price,
              category: editForm.category,
              // image turant change nahi karenge (cloudinary delay)
            }
          : p
      )
    );

    const data = new FormData();
    data.append("name", editForm.name);
    data.append("price", editForm.price);
    data.append("category", editForm.category);

    if (editForm.image) {
      data.append("image", editForm.image);
    }

    await API.put(`/products/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // ? final correct data
    await fetchProducts();

    setEditId(null);

    toast.success("Product Updated");

  } catch (error) {
    console.log(error.response?.data);
    toast.error("Update Failed");

    // ? agar fail hua to rollback
    await fetchProducts();
  } finally {
    setLoading(false);
  }
};

  return (
    <>
    
    <Header />

    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="bg-white p-4 rounded-xl shadow">
            {editId === p._id ? (
              <>
                <input
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="border p-2 mb-2 w-full rounded"
                />

                <input
                  value={editForm.price}
                  onChange={(e) =>
                    setEditForm({ ...editForm, price: e.target.value })
                  }
                  className="border p-2 mb-2 w-full rounded"
                />

                <input
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm({ ...editForm, category: e.target.value })
                  }
                  className="border p-2 mb-2 w-full rounded"
                />

                <input
                  type="file"
                  onChange={(e) =>
                    setEditForm({ ...editForm, image: e.target.files[0] })
                  }
                  className="mb-2"
                />

                <button
                  onClick={() => handleUpdate(p._id)}
                  disabled={loading}
                  className={`px-3 py-1 rounded text-white ${
                    loading ? "bg-gray-400" : "bg-green-500"
                  }`}
                >
                  {loading && <p className="text-sm text-gray-500">Uploading image...</p>}
                  Save
                </button>

                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-400 text-white px-3 py-1 m-2 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <img
                  src={p.image}
                  alt=""
                  className="w-full h-40 object-contain bg-gray-100 rounded mb-2"
                />

                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-600">{p.price}</p>
                <p className="text-sm text-gray-500">{p.category}</p>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => startEdit(p)}
                    className="bg-yellow-400 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>

    <Footer />
    
    
    </>
  );
};

export default ProductList;
