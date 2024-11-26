"use client";
import "./page.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Work from "@/components/work//Work";
import About from "@/components/about//About";

export default function Home() {
  return (
    <main>
      <div className="portfolio-container">
        <Navbar />
        <Hero />
        <Work />
        <About />
      </div>
    </main>
  );
}
