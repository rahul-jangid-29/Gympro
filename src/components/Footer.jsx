import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-2">&copy; 2024 GymPro. All Rights Reserved.</p>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <a
            href="https://x.com/rahul_jangid_29?t=W8_ZVpC6atRGyWFe9_uW-g&s=09"
            aria-label="Twitter"
            className="mx-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter fs-4"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-jangid-2b9845212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="LinkedIn"
            className="mx-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a
            href="https://www.instagram.com/raahul_2912/profilecard/?igsh=MTlyb3Y4MmwwdzQ3bg=="
            aria-label="Instagram"
            className="mx-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram fs-4"></i>
          </a>
        </div>
        <p className="small">
          Designed by <a href="#" className="text-primary">Rahul Jangid</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
