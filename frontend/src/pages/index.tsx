import React from "react";
import { Hero } from "../components/Hero";
import { ProductTrio } from "../components/ProductTrio";
import Carousel from "../components/Carousel";
import { Category } from "../components/Category";
import { Blog } from "../components/Blog";
import { Newsletter } from "../components/Newsletter";



export default function Home({product}) {
  
  return (

    <div className="">
      <main>
        <Hero />
        <Carousel />
        <ProductTrio />
        <Category  product={product}/>
        <Blog />
        <Newsletter />
      </main>

    </div>
  );
}
