import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          Welcome to our villa collection, where luxury meets comfort. We specialize in offering
           exquisite properties for unforgettable vacation experiences.
          </p>
          <p>
          Our curated villas boast stunning locations, exceptional amenities, 
          and personalized services. Each villa is chosen to ensure the highest standards 
          of excellence.
          </p>
          <p>
          We pride ourselves on delivering seamless, tailored experiences. 
          From booking to departure, our dedicated team is here to make your stay perfect.
          </p>
          <p>
          Discover your dream escape with us. Whether seeking adventure or relaxation, 
          our villas promise the ultimate retreat for discerning travelers.
          </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;