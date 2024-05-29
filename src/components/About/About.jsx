import "./About.css";
import Play_icon from "../../assets/play-icon.png";
import About_img from "../../assets/about.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={About_img} alt="about_img" className="about-img" />
        <img onClick={() => { setPlayState(true) }} src={Play_icon} alt="play-icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>At Edusity, we believe that education is the cornerstone of personal and societal growth. Our mission is to empower learners of all ages and backgrounds to achieve their full potential by providing high-quality educational resources and fostering a supportive learning community.</p>
        <p>Whether you are interested in contributing content, providing feedback, or partnering with us, there are many ways to get involved with Edusity. Together, we can shape the future of education and empower learners worldwide to thrive in an ever-changing world.</p>
        <p>From interactive courses and tutorials to informative articles and engaging multimedia content, whether you're a professional seeking to enhance your skills or a lifelong learner eager to explore new interests, we have something for you.</p>
        <p>Thank you for choosing Edusity as your educational partner. Let us embark on this journey of discovery and growth together!</p>
      </div>
    </div>
  );
};

export default About;
