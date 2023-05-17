import React, { useState } from "react";
import "./styles.css";

const currentYear = new Date().getFullYear();
function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform the necessary logic with the submitted email
      console.log("Submitted email:", email);
      // Reset the form after submission
      setEmail("");
    };
  return (
    <footer className="Footer">
      <div className="footer">
        <div className="sec-1">
          <h3>FOLLOW</h3>
          <a href="Facebook">Facebook</a>
          <br />
          <a href="Twitter">Twitter</a>
          <br />
          <a href="Instagram">Instagram</a>
          <br />
          <a href="Youtube">Youtube</a>
        </div>
        <div className="sec-1">
          <h3>INFO</h3>
          <a href="About">About</a>
          <br />
          <a href="Contact">Contact</a>
          <br />
          <a href="Disclaimer">Disclaimer</a>
          <br />
          <a href="Privacy Policy">Privacy Policy</a>
        </div>
        <div className="sec-2">
          <h3>NEWSLETTER</h3>
          <p>
            Sign up for free and be the first to get notified about updates.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="Footer-content">
        <p>&copy; {currentYear} Narrative Nexus. All rights reserved.</p>
        <p className="footer-text">Created by Sandeep-Kumar-Mahato</p>
      </div>
    </footer>
  );
}

export default Footer;
