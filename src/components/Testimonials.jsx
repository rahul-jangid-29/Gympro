import React from "react";
import user1 from "../assets/trainer-1.avif";
import user2 from "../assets/trainer-2.avif";
import user3 from "../assets/trainer-3.webp";

const Testimonials = () => {
  const testimonials = [
    {
      img: user1,
      feedback: "The best gym experience I have ever had!",
      name: "John Doe",
    },
    {
      img: user2,
      feedback: "Friendly staff and excellent facilities!",
      name: "Jane Smith",
    },
    {
      img: user3,
      feedback: "Thanks to my trainer, I feel stronger than ever!",
      name: "Emily Johnson",
    },
  ];

  return (
    <section className="py-5 bg-light" id="testimonials">
      <div className="container text-center">
        <h2 className="mb-4">What Our Members Say</h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-4 shadow">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-circle mb-3 mx-auto"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <blockquote>"{testimonial.feedback}"</blockquote>
                <h5>{testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
