import React from "react";
import Style from "../styles/index.module.css";
import {
  HeroSection,
  BigNFTSlider,
  Service,
  Subscribe,
  Title,
  Category,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homepage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
