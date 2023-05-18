import React from "react";


import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { Featured } from "../components/Featured";
import { Blog } from "../components/Blog";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="">
  
      <main>
        <Hero />
        <Carousel />
        <ProductCard />
        <Featured />
        <Blog />
        <Newsletter />
      </main>

    </div>
  );
}
