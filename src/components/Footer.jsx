import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p>&copy; 2024 GymPro. All Rights Reserved.</p>
        <p>
          Follow us on{" "}
          <a href="#" className="text-white">
            Facebook
          </a>
          ,{" "}
          <a href="#" className="text-white">
            Twitter
          </a>
          , and{" "}
          <a href="#" className="text-white">
            Instagram
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
