import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import "../styles/hero.css"; // Import your CSS for styling

const Hero = () => {
  return (
    <header className="hero-section position-relative">
      <Navbar /> {/* Insert Navbar here */}

      {/* Hero Content */}
      <div className="container text-center text-white hero-content">
        <h1 className="display-3 fw-bold mb-4">
          Welcome to <span className="text-warning">GymPro</span>
        </h1>
        <p className="lead mb-5 mx-auto" style={{ width: "60%" }}>
          Unlock your full potential with personalized fitness programs and expert guidance. Whether you're looking to get fit, stay in shape, or challenge yourself, we have the right plan for you! Our expert trainers, flexible scheduling, and variety of classes will guide you every step of the way.
        </p>

        <div className="d-flex justify-content-center">
          <a href="#membership" className="btn btn-primary btn-lg px-4 py-2 me-3 shadow-lg">
            Explore Plans
          </a>
          <a href="/contact" className="btn btn-outline-light btn-lg px-4 py-2 shadow-lg">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
