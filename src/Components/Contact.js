import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <title>Seerat Public School | Contact Us</title>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              style={{ fontSize: "xx-large" }}
            >
              Seerat Public <span style={{ color: "#1E3A8A" }}>School</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center fs-5">
                <li className="nav-item">
                  <Link className="nav-link active" to="/About">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Faculty">
                    Faculty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <br />
      <br />

      <div className="container my-5">
        <h1 className="text-center fw-bold" data-aos="fade-left">
          Contact{" "}
          <span style={{ color: "#1E3A8A" }} data-aos="fade-up">
            Us
          </span>
          <hr className="w-25 m-auto" />
        </h1>
        <p className="text-center" data-aos="fade-right">
          Feel free to reach out to us for any queries or assistance.
        </p>

        <div className="row mt-4">
          <div className="col-md-6" data-aos="fade-left">
            <div className="contact-section">
              <h4 className="text-center fw-bold" style={{ color: "#d4af37" }}>
                Send Us a Message
              </h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-right">
            <div className="contact-section">
              <h4 className="text-center fw-bold" style={{ color: "#d4af37" }}>
                Our Contact Information
              </h4>
              <div className="contact-info mt-3">
                <p>
                  <i className="fas fa-map-marker-alt"></i> Mali Bag, Quetta
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  info@seeratpublicschool.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> +92 333 7459943
                </p>
              </div>
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.1773669092324!2d67.0178059!3d30.1913688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de3e595b3121%3A0xc384bf43b20cba8f!2sMali%20Bagh%20Quetta%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710488761234!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="text-light py-5"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="fw-bold" style={{ color: "#d4af37" }}>
                Seerat Public School
              </h4>
              <p>
                Providing quality education with a strong foundation in moral
                and ethical values.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold" style={{ color: "#d4af37" }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://seerat.education/"
                    className="text-decoration-none"
                  >
                    Seerat Educational System
                  </a>
                </li>
                <li>
                  <a
                    href="https://sinanahmedses.github.io/Ses-Solution/"
                    className="text-decoration-none"
                  >
                    SES-SOLUTION
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold" style={{ color: "#1E3A8A" }}>
                Contact Us
              </h5>
              <p>
                <i className="fas fa-map-marker-alt"></i> Mali Bag, Quetta
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@seeratpublicschool.com
              </p>
              <p>
                <i className="fas fa-phone"></i> +92 333 7459943
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
