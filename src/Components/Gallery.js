import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Gallery = () => {
  return (
    <>
      <title>Seerat Public School | Gallery</title>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontSize: "xx-large" }}>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      <br />
      <br />

      {/* Gallery Section */}
      <section className="container my-5">
        <h1 className="text-center fw-bold" style={{ color: "#1e1e1e" }}>
          Our <span style={{ color: "#1E3A8A" }}>Gallery</span>
        </h1>
        <p className="text-center text-muted">
          Explore moments from our school.
        </p>

        <div className="row mt-4 g-3">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className="col-md-4" key={num}>
              <div className="gallery-item">
                <a href={`gallery${num}.jpg`} data-lightbox="gallery">
                  <img
                    src={`gallery${num}.jpg`}
                    alt={`Gallery Image ${num}`}
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
};

export default Gallery;
