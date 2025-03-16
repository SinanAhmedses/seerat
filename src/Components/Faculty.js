import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Faculty = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <title>Seerat Public School | Faculty</title>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ fontSize: "xx-large" }}
            >
              Seerat Public <span style={{ color: "#1E3A8A" }}>School</span>
            </a>
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/About"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Faculty">
                    Faculty
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <br />
      <br />
      <br />

      <section className="container my-5">
        <h1 className="text-center fw-bold" style={{ color: "#1e1e1e" }}>
          Meet Our <span style={{ color: "#1E3A8A" }}>Faculty</span>
        </h1>
        <p className="text-center">Our dedicated and experienced educators.</p>

        {[...Array(3)].map((_, rowIndex) => (
          <div className="row mt-4" key={rowIndex} data-aos="zoom-in">
            {[...Array(3)].map((_, colIndex) => (
              <div className="col-md-4" key={colIndex}>
                <div className="card teacher-card text-center shadow-lg p-4">
                  <h4 className="fw-bold">Teacher's Name here!</h4>
                  <p>Teacher's Subject here!</p>
                  <div className="social-icons">
                    <a href="/" className="me-2">
                      <i className="fab fa-facebook fa-lg"></i>{" "}
                    </a>
                    <a href="/">
                      <i className="fab fa-linkedin fa-lg"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        {[...Array(3)].map((_, rowIndex) => (
          <div className="row mt-4" key={rowIndex} data-aos="zoom-in">
            {[...Array(3)].map((_, colIndex) => (
              <div className="col-md-4" key={colIndex}>
                <div className="card teacher-card text-center shadow-lg p-4">
                  <h4 className="fw-bold">Teacher's Name here!</h4>
                  <p>Teacher's Subject here!</p>
                  <div className="social-icons">
                    <a href="/" className="me-2">
                      <i className="fab fa-facebook fa-lg"></i>{" "}
                    </a>
                    <a href="/">
                      <i className="fab fa-linkedin fa-lg"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
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

export default Faculty;
