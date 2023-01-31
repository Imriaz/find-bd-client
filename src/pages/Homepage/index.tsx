import React from "react";
import heroBanner from "../../assets/images/banners/hero_banner.png";
import SearchTool from "../../components/SearchTool";
import Timezone from "../../components/Timezone";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__main">
        <img className="homepage__main__banner" src={heroBanner} alt="Homepage Banner"/>
        <div className="homepage__main__slogan">
          <h1>Search properties for sell and for rent in Bangladesh</h1>
        </div>
        <SearchTool />
      </div>
    </div>
  );
};

export default Homepage;
