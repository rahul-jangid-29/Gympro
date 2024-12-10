// Gallery.jsx
import React from "react";
import facility1 from "../assets/facility-1.jpeg";
import facility2 from "../assets/facility-2.webp";
import facility3 from "../assets/facility-3.jpeg";
import facility4 from "../assets/facility-4.jpeg";
import facility5 from "../assets/facility-5.webp";
import facility6 from "../assets/facility-6.webp";

const Gallery = () => {
  const gallery = [
    {
      img: facility1,
      title: "Cardio",
    },
    {
      img: facility2,
      title: "Weight Training",
    },
    {
      img: facility3,
      title: "Zumba",
    },
    {
      img: facility4,
      title: "Cross-Fit",
    },
    {
      img: facility5,
      title: "Strength Training",
    },
    {
      img: facility6,
      title: "Yoga",
    },
  ];

  return (
    <section className="gallery-section py-5 bg-light" id="facilities">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Our Gym Gallery</h2>
        <p className="text-center mb-5 text-muted">
          Take a look at our state-of-the-art facilities and vibrant gym community.
        </p>
        <div className="row g-4">
          {gallery.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="gallery-image shadow-sm rounded position-relative overflow-hidden">
                <img
                  src={item.img}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid rounded"
                />
                {/* Overlay with Text */}
                <div className="gallery-overlay d-flex align-items-center justify-content-center">
                  <h5 className=" text-center fw-bold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Gallery;
