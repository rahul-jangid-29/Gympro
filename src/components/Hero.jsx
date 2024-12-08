import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Monitor authentication state
    const unsubscribe = window.auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update state with the current user
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = () => {
    window.auth
      .signOut()
      .then(() => alert("Logged out successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <header className="hero-section position-relative">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-white" href="#">
            GymPro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active fw-semibold text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white" href="#facilities">
                  Facilities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <Link to="/signup" className="btn btn-primary fw-semibold shadow-lg">
              Join Now
            </Link>
            {user && ( // Show Logout button only if user is logged in
              <button onClick={handleLogout} className="btn btn-secondary ms-2">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
      {/* Hero Content */}
      <div className="container text-center text-white hero-content">
        <h1 className="display-4 fw-bold">Welcome to GymPro</h1>
        <p className="lead">
          Achieve your fitness goals with personalized training programs.
        </p>
        <a href="#membership" className="btn btn-primary btn-lg mt-3">
          Explore Plans
        </a>
      </div>
    </header>
  );
};

export default Hero;
