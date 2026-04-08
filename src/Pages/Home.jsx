import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="h-[700px] flex flex-col md:flex-row mt-50">
        {/* LEFT SIDE - IMAGE */}
        <div className="md:w-1/2 flex items-center justify-center px-8">
          <img
            src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04165947/EC_Retail_ECommerce_750.jpg"
            alt="intro"
            className="w-full h-640 object-cover rounded-lg cursor-pointer"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="md:w-1/2 flex items-center justify-center px-6">
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Platform
            </h1>

            <p className="text-gray-600 mb-6">
              We provide modern solutions to help you grow your business. Manage
              products, track performance, and scale easily with our system.
            </p>

            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
