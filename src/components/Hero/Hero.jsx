import "./Hero.css";
import Arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>

        <p>
          Our cutting-edge curriculam is desgned to empower students with the
          knowledge,skills and experiences needed to excel in the dynamic field
          od education
        </p>

        <button className="btn">
          Explore more <img src={Arrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
