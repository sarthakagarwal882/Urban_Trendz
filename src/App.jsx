import React from "react";

import ProductPanel from "./components/ProductPanel";
import ProductHeading from "./components/ProductHeading";
import AboutPage from "./components/AboutPage";
import Service from "./components/Service";
import Header from "./components/Header";
import AllProductList from "./components/AllProductList"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <ProductPanel />
      <AboutPage />
      <ProductHeading />
      <AllProductList />
      <Service />
      <Footer/>
    </>
  );
}

export default App;
