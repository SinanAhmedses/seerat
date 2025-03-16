import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "aos/dist/aos.css";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <title>Seerat Public School | About</title>
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
      <div
        className="main text-center py-5"
        style={{ marginTop: "80px", minHeight: "200px" }}
      >
        <h1>
          We Build the Future{" "}
          <span style={{ color: "#1E3A8A" }}>of Students</span>
        </h1>
      </div>

      <section className="container text-center my-5">
        <div className="card shadow-lg p-4 border-0" data-aos="fade-left">
          <h2 className="fw-medium text-warning">Quranic Verse</h2>
          <div className="mt-3">
            <h2
              style={{ fontSize: "2.5rem", direction: "rtl", color: "#2c3e50" }}
            >
              ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ
            </h2>
            <p style={{ fontStyle: "italic" }}>
              "Who taught by the pen." (Surah Al-'Alaq 96:4)
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container my-5 text-center">
        <h2 className="fw-medium" data-aos="fade-up">
          Our Core <span style={{ color: "#1E3A8A" }}>Principles</span>
        </h2>
        <div className="row mt-4" data-aos="fade-down">
          {[
            {
              icon: "fas fa-mosque",
              title: "Taqwa",
              text: "We instill God-consciousness in students, helping them build a strong moral and ethical foundation.",
              color: "text-primary",
            },
            {
              icon: "fas fa-handshake",
              title: "Ikhlaq",
              text: "We focus on character development, teaching respect, honesty, and kindness as core values.",
              color: "text-success",
            },
            {
              icon: "fas fa-book-open",
              title: "Educational Proficiency",
              text: "We provide quality education, equipping students with knowledge and skills for lifelong success.",
              color: "text-danger",
            },
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-lg p-4">
                <i className={`${item.icon} fa-3x ${item.color}`}></i>
                <h4 className="mt-3">{item.title}</h4>
                <p className="text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container my-5">
        <h2 className="fw-medium text-center" data-aos="fade-up">
          Our <span style={{ color: "#1E3A8A" }}>Vision</span>
        </h2>
        <hr className="w-25 m-auto" />
        <br />
        <p
          className="text-start"
          style={{ fontSize: "larger" }}
          data-aos="fade-down-right"
        >
          At Seerat Public School, we believe education is the key to a brighter
          future. Our vision is to create a school where students learn, grow,
          and lead with confidence.
        </p>
        <h4 className="text-start" data-aos="fade-right">
          We aim to:
        </h4>
        <p style={{ fontSize: "larger" }} data-aos="fade-down">
          Provide quality education that prepares students for success. Build
          strong character with honesty, respect, and responsibility. Encourage
          creativity and critical thinking for real-world challenges. With
          dedicated teachers and a supportive environment, we help students
          become confident, capable, and ready for the future.
        </p>
      </section>

      <section className="container  my-5">
        <h2 className="fw-medium text-center" data-aos="fade-left">
          Our <span style={{ color: "#1E3A8A" }}>Mission</span>
        </h2>
        <hr className="w-25 m-auto" />
        <br />
        <p style={{ fontSize: "larger" }} data-aos="fade-down-left">
          At Seerat Public School, our mission is to educate, inspire, and
          empower every student to reach their full potential. We are committed
          to providing a learning environment that builds knowledge, character,
          and confidence.
        </p>
        <h4 className="text-start" data-aos="fade-left">
          Our goals:
        </h4>
        <p style={{ fontSize: "larger" }} data-aos="fade-down-left">
          Deliver high-quality education that prepares students for the future.
          <br />
          Foster discipline and strong moral values to build responsible
          individuals.
          <br />
          Encourage curiosity, creativity, and problem-solving for lifelong
          success.
          <br />
          Support personal and academic growth in a safe and nurturing
          environment.
          <br />
          We believe that every child is capable of greatness, and we are
          dedicated to guiding them toward a future filled with success and
          purpose.
        </p>
      </section>

      <section className="container my-5">
        <h2 className="fw-medium  text-center" data-aos="fade-right">
          Why Choose Seerat{" "}
          <span style={{ color: "#1E3A8A" }}>Public School?</span>
        </h2>
        <hr className="w-25 m-auto" />
        <br />
        <p style={{ fontSize: "larger" }} data-aos="fade-down-right">
          At Seerat Public School, we go beyond textbooks—we shape bright minds,
          strong characters, and future leaders. Here’s why parents trust us
          with their children’s education:
          <br />
          <br />
          <b>Quality Education:</b> A well-rounded curriculum that ensures
          academic excellence.
          <br />
          <br />
          <b>Strong Moral Foundation:</b> We nurture students with values that
          build integrity and respect.
          <br />
          <br />
          <b>Experienced & Caring Teachers:</b> Dedicated educators who guide
          and inspire.
          <br />
          <br />
          <b>Modern Learning Methods:</b> Interactive and engaging teaching
          techniques for deeper understanding.
          <br />
          <br />
          <b>Safe & Supportive Environment:</b> A place where students feel
          confident, valued, and motivated.
          <br />
          <br />
          <b>Focus on Personal Growth:</b> Encouraging creativity, leadership,
          and lifelong learning.
          <br />
          <br />
          At Seerat Public School, we prepare students not just for exams, but
          for life itself.
        </p>
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
            {["facebook", "twitter", "instagram", "linkedin"].map(
              (social, index) => (
                <a key={index} href="/" className="text-light me-3">
                  <i className={`fab fa-${social} fa-2x`}></i>
                </a>
              )
            )}
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
