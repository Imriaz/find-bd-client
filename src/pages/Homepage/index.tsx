import React from "react";
import heroBanner from "../../assets/images/banners/hero_banner.png";
import SearchTool from "../../components/SearchTool";

const Homepage = () => {
  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "600px",
            borderRadius: "8px",
          }}
          src={heroBanner}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            color: "white",
          }}
        >
          <h1>Search properties for sell and for rent in Bangladesh</h1>
        </div>
        <SearchTool />
      </div>
    </div>
  );
};

export default Homepage;
