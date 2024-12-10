import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your backend API or Firebase function to handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <>
      <div className="contact-page bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">Get in Touch</h1>
          <p className="text-center mb-5">
            We'd love to hear from you! Whether you have questions about our plans, facilities, or trainers, feel free to reach out.
          </p>

          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4">
                <h3 className="text-center mb-3">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Write your message here"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  {submitted && (
                    <p className="text-success text-center">
                      Thank you! Your message has been sent.
                    </p>
                  )}
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100">
                <h3 className="text-center mb-3">Contact Information</h3>
                <p>
                  <strong>Address:</strong> 123 Fitness St, Wellness City, GymState
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Email:</strong> contact@fitbee.com
                </p>
                <h4 className="text-center mt-4">Our Location</h4>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941508468176!3d37.77492977975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e0d7fb%3A0x8f2e7910bb9fdccf!2sGym%20Fitness!5e0!3m2!1sen!2sus!4v1634577893956!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;
