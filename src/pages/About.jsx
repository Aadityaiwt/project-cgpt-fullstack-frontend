import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Header />

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-center mb-8">
          Welcome to our e-commerce platform where we aim to provide
          the best products at affordable prices with a seamless shopping experience.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
               Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to deliver high-quality products with fast delivery
              and excellent customer service. We focus on building trust and
              long-term relationships with our customers.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
               Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to become a leading e-commerce platform by
              continuously improving user experience and adopting modern technologies.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-center">
             Why Choose Us
          </h2>

          <ul className="space-y-2 text-gray-600 text-center">
            <li> High Quality Products</li>
            <li> Secure Payments</li>
            <li> Fast Delivery</li>
            <li> 24/7 Customer Support</li>
          </ul>
        </div>

      </div>
    </div>

    <Footer />
    
    
    </>
  );
};

export default About;