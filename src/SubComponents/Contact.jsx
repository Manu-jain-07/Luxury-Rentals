import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
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
          <Link to={"https://www.linkedin.com/in/manu-jain-018baa244/"} target="_blank"><FaLinkedin /></Link>
          <Link to={"https://leetcode.com/u/21btc135/"} target="_blank"><SiLeetcode /></Link>
          <Link to={"https://github.com/Manu-jain-07"} target="_blank"><RiGithubLine /></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;