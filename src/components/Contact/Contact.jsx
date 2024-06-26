import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>
        <p>Have questions? Reach out to us anytime, we're here to help.
          Fill out our contact form for quick assistance.</p>
        <p>
          For reservations or inquiries, email or call us directly. Our team ensures prompt responses
          to all your needs.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Let's connect</h3>
            <div>
              <p>Phone</p>
              <span>+91 9691828493</span>
            </div>
            <div>
              <p>Email</p>
              <span>manu05549@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
              <span>Anand Tent House Sagar</span>
            </div>
            <ul>
              <Link to={"/facebook"} target="_blank">
                <RiFacebookBoxLine />
              </Link>
              <Link to={"/facebook"} target="_blank">
                <RiFacebookBoxLine />
              </Link>
              <Link to={"/facebook"} target="_blank">
                <RiFacebookBoxLine />
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;