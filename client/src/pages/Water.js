import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Fragment } from "react";
import Nav from "../components/NavbarDashboard";
// import { ButtonR } from "../components/ButtonElements";
import "../styles/Ssvep.css";
import "../styles/Dashboard.css";

const Water = ({
  isAuthenticated,
  setAuth,
  setRegister,
  isOpen,
  toggleIsOpen,
  primary,
  dark,
  dark2,
}) => {
  return (
    <div className="dashboard">
      <Sidebar
        animate={true}
        isAuthenticated={isAuthenticated}
        setAuth={setAuth}
        setRegister={setRegister}
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      <Nav
        animate={true}
        isAuthenticated={isAuthenticated}
        setAuth={setAuth}
        setRegister={setRegister}
        toggleIsOpen={toggleIsOpen}
      />
      <div className="fullpage-dashboard">
        <Fragment className="page-bg">
          <h1 className="text-h1">
            Please wait our correspondent will soon bring water.
          </h1>
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

export default Water;
