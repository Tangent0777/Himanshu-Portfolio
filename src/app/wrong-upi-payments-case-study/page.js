"use client";
import "./page.css";
import Navbar from "./components-stack/navbar/Navbar";
import Content from "./components-stack/content/Content";

export default function Home() {
  return (
    <div className="stack-container">
      <Navbar />
      <Content />
    </div>
  );
}
