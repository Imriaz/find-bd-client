import React from "react";
import Footer from "../layouts/Footer";
import Menubar from "../layouts/Menubar";
import Homepage from "../pages/Homepage";

const Routes = () => {
  return (
    <>
      <Menubar />
      <div className="main">
        <Homepage />
      </div>

      <Footer />
    </>
  );
};

export default Routes;
