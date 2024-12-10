import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100">
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold text-white fs-3" href="/">
          GymPro
        </a>

        {/* Navbar Toggler for Small Screens */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-white" href="#facilities">
                Facilities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-white" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Right-Aligned Buttons */}
          <div className="d-flex align-items-center gap-2">
            <Link to="/signup" className="btn btn-outline-light fw-semibold shadow-lg">
              Join Now
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-secondary fw-semibold shadow-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline-light fw-semibold shadow-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
