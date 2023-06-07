import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductTrio = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter the products based on the selected category
  const filteredProducts =
    selectedCategory !== "all"
      ? products.filter(
          (product) => product.fields.category === selectedCategory
        )
      : products;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products
          </h2>
          <a
            href="/products"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all products
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {filteredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.sys.id} product={product} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className={`mx-2 px-4 py-2 font-semibold ${
              selectedCategory === "all" ? "text-indigo-600" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>
          <button
            className={`mx-2 px-4 py-2 font-semibold ${
              selectedCategory === "casual"
                ? "text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("casual")}
          >
            Casual
          </button>
          <button
            className={`mx-2 px-4 py-2 font-semibold ${
              selectedCategory === "posh" ? "text-indigo-600" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("posh")}
          >
            Posh
          </button>
          <button
            className={`mx-2 px-4 py-2 font-semibold ${
              selectedCategory === "cool" ? "text-indigo-600" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("cool")}
          >
            Cool
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTrio;
