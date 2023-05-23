import React from "react";
import Head from 'next/head';
import { Hero } from "../components/Hero";
import { ProductTrio } from "../components/ProductTrio";
import Carousel from "../components/Carousel";
import { Featured } from "../components/Featured";
import { Blog } from "../components/Blog";
import { Newsletter } from "../components/Newsletter";


export default function Home() {
  return (
    <div className="">
        <Head>
        <title>MESL - Only Clothing Store You'll Ever Need!</title>
        <meta
          name="description"
          content="We strive to provide the best quality clothing to our clients."
        />
      </Head>
  
      <main>
        <Hero />
        <Carousel />
        <ProductTrio />
        <Featured />
        <Blog />
        <Newsletter />
      </main>

    </div>
  );
}
