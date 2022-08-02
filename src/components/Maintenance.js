import React from "react";
import Footer from "../pages/Footer/Footer";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <>
      {/* <Nav/> */}

      <div>
        <h1 className="auction">Under Construction</h1>
        <h6 className="auction1">
          We apologize for the inconvenience, but we're performing some
          maintenance. We'll be back up soon!
        </h6>
        <Link to="home"><button className="back_to_home">Back to Home</button></Link>
        {/* <p>— Coding is Love</p> */}
        <Footer />
      </div>
    </>
  );
};

export default Maintenance;
