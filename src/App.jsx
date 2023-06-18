import React from "react";

import ProductPanel from "./components/ProductPanel";
import ProductHeading from "./components/ProductHeading";
import AboutPage from "./components/AboutPage";
import Service from "./components/Service";
import Header from "./components/Header";
import AllProductList from "./components/AllProductList"
<<<<<<< HEAD
import Navbar from "./components/Navbar"
=======
import Footer from "./components/Footer"
>>>>>>> 255c5ac37e9af9d778c5c966e1bcb1abc52bcebe

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
      <Footer/>
    </>
  );
}

export default App;
