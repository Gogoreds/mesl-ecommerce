import { createClient } from "contentful";
import ProductCard from "../../components/ProductCard";
import React, { useState } from "react";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: "product" });
  return {
    props: {
      products: res.items,
    },
  };
}

const ProductList = ({ products }) => {
  const [search, setSearch] = useState("");

  console.log(products);

  const filteredProducts = products.filter((product) => {
    if (search === "") {
      return true;
    } else if (
      product.fields.title &&
      product.fields.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="bg-white">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="mx-10 mt-12 text-2xl font-bold tracking-tight text-gray-900">
          Our Shop
        </h2>
        <input
          type="text"
          placeholder="Search product..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <a
          href="/"
          className="mx-10 hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          Back to home
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <div className="mt-0 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.sys.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
