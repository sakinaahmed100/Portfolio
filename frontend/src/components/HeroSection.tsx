import Button from "./Button";
import profileImg from "../assets/profilleImg.jpg"
import "../styles/HeroSection.css"
import 'animate.css';

function HeroSection() {
  return (
    <section className="heroSection">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="content">
        <div className="lefthero">
          <h1>
            Hi, I'm  <span>Sakina</span>, <br />
            a Web Developer
          </h1>
          <p>Building modern solutions for the web</p>
          <div className="divBtn">
            <Button text="Contact" link={"/contact"} />
            <a
              href="/my_CV.pdf" // Ensure the correct file path
              download="SakinaAhmed_CV.pdf" // Name of the file when downloaded
            >
              <Button text="Download CV" />
            </a>
          </div>
        </div>
        <div className="righthero  animate__pulse animate__slow animate__animated animate__infinite">
          <div className="image-container">
            <img src={profileImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
