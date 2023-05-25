import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Hero } from "../components/Hero";
import ProductTrio from "../components/ProductTrio";
import Carousel from "../components/Carousel";
import { Blog } from "../components/Blog";
import { Newsletter } from "../components/Newsletter";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });

    const fetchProducts = async () => {
      try {
        const response = await client.getEntries({ content_type: "product" });
        setProducts(response.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="">
      <main>
        <Hero />
        <Carousel />
        <ProductTrio products={products} />
        <Blog />
        <Newsletter />
      </main>
    </div>
  );
}
