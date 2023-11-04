import React from "react";
import "./Navbar.css";

function Navbar({ toggleMode, mode }) {
  return (
    <div>
      <nav
        className={`flex align-middle flex-rows shadow-xl fixed w-full`}
        style={{
          backgroundColor: mode === "dark" ? "#1b1d28" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <img
          className="w-14 ml-3 image-container"
          src="https://i.pinimg.com/originals/67/a1/6a/67a16a4e1e6e63d74739be47dffbfe02.png"
          alt="error"
        />
        <h1 className="m-auto text-xl font-medium title-container">
          IMAGE GALLERY APP
        </h1>
        <div className="form-check form-switch flex items-center">
          <input
            className="form-check-input navbar-container"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleMode}
          />
          <label
            className="form-check-label mr-2 ml-1 font-medium navbar-container cursor-pointer"
            htmlFor="flexSwitchCheckDefault"
          >
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
