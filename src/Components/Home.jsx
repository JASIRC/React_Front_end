import React from "react";
import NavBar from "./User/NavBar";
import SearchAndLogin from "./User/SearchAndLogin";
import ScrollingImage from "./User/ScrollingImage";
import { SliderData } from "./User/SliderData";
import Cover from "./User/Cover";
import Category from "./User/Category";
import Footer from "./User/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchAndLogin />
      <Cover />
      <ScrollingImage slides={SliderData} />
      <Category />
      <Footer />
    </div>
  );
};

export default Home;
