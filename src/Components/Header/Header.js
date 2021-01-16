import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div>
      <div className="header-wraper">
        <div className="main-info">
          <h1>Kaushik Mohanty</h1>
          <Typed
            className="typed-text"
            strings={[
              "Web Design",
              "Web Development",
              "MongoDB",
              "ReactJs",
              "Node",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href="#" className="btn-main-offer">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
