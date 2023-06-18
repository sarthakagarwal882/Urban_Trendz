import React from "react";

import ProductPanel from "./components/ProductPanel";
import ProductHeading from "./components/ProductHeading";
import AboutPage from "./components/AboutPage";
import Service from "./components/Service";
import Header from "./components/Header";
import AllProductList from "./components/AllProductList"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
      <Header />
      <ProductPanel />
      <AboutPage />
      <ProductHeading />
      <AllProductList />
      <Service />
    </>
  );
}

export default App;
