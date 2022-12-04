import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Testimonial from "./pages/Testimonial";
// import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cards from "./pages/Cards";
import Appform from "./pages/Appform";
import Zikirapp from "./pages/Zikirapp";
import Declare from "./pages/Declare";

export default function Routing() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/zikir-app" element={<Zikirapp />} />
        <Route path="/zikir-app/declare" element={<Declare />} />
        <Route path="/reviews" element={<Testimonial />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/appform" element={<Appform />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
