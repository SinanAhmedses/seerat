import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome
import AOS from "aos"; // AOS Animation
import "aos/dist/aos.css"; // AOS Styles
import "../App.css"; // Your custom styles
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <title>Seerat Public School | Home</title>
      {/* Header */}
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 data-aos="fade-up">Welcome To Seerat Public School</h1>
          <p data-aos="fade-up">
            Seerat Public School Is The Second Branch Of Seerat Educational
            System
          </p>
          <a
            href="/About"
            title="Learn more about SES SOLUTION"
            data-aos="fade-down"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-light py-5"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="container">
          <div className="row">
            {/* Logo & About */}
            <div className="col-md-4">
              <h4 className="fw-bold" style={{ color: "#d4af37" }}>
                Seerat Public School
              </h4>
              <p>
                Providing quality education with a strong foundation in moral
                and ethical values.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4">
              <h5 className="fw-bold" style={{ color: "#d4af37" }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://seerat.education/"
                    className="text-decoration-none"
                    title="Goto Seerat Educational System"
                  >
                    Seerat Educational System
                  </a>
                </li>
                <li>
                  <a
                    href="https://sinanahmedses.github.io/Ses-Solution/"
                    className="text-decoration-none"
                    title="Goto SES-SOLUTION"
                  >
                    SES-SOLUTION
                  </a>
                </li>
                <li>
                  <Link to="/Contact" className="text-decoration-none">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4">
              <h5 className="fw-bold" style={{ color: "#d4af37" }}>
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

          <hr style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

          {/* Social Media & Copyright */}
          <div className="text-center mt-3">
            <a href="/" className="text-light me-3">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="/" className="text-light me-3">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="/" className="text-light me-3">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="/" className="text-light">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <p className="mt-3">
              &copy; 2025 Seerat Public School. All Rights Reserved | Developed
              By Sinan Ahmed
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
