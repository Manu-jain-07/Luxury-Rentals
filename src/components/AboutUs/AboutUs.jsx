import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Welcome to our exquisite villa, where luxury meets tranquility. Nestled amidst serene landscapes, our sanctuary 
            offers unparalleled comfort.
         </p>
          <p>Experience personalized hospitality in every detail. Our villa embodies sophistication and relaxation, 
            perfect for discerning travelers. Enjoy privacy and 
            breathtaking views, creating unforgettable moments.</p>
          <p>"Indulge in a haven of beauty and serenity. Our villa promises a retreat like no other, crafted for
             ultimate  rejuvenation. Discover a sanctuary where luxury and nature harmoniously converge."</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;