import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>
              User-friendly interface: Fantasy Action Sports will have an easy-to-use interface that allows users to quickly and easily select the sports series they want to participate in and make their picks.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> 123 Main St, New York, NY 10001</li>
                <li><i className="fas fa-envelope"></i> info@example.com</li>
                <li><i className="fas fa-phone"></i> +1 (123) 456-7890</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                  <FaFacebook />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





