import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Body from "./components/Body";
import { Analytics } from "@vercel/analytics/react";
import "./components/mobilecss.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Analytics />
    </div>
  );
}

export default App;
