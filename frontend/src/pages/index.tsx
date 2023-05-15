import React from "react";
import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

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
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
