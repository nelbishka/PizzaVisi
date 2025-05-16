import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="pizzabg" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="pizzacover" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Dine in the center of Berat
        </h1>
        <p className="primary-text">
          Stop worrying about your diet. <br></br>
          Trust me, a cheat day is worth it here.
        </p>
      </div>
    </div>
  );
};

export default About;