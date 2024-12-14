import Button from "./Button";
import profileImg from "../assets/profilleImg.jpg"
import "../styles/HeroSection.css"

function HeroSection() {
    return (
      <section className="heroSection">
        <div className="lefthero">
            <h1>
            Hi, I'm <b>Sakina</b>, <br />
            a Web Developer
            </h1>
            <p>Building modern solutions for the web</p>
            <div className="divBtn">
            <Button/>
            <Button/>
            </div>
        </div>
        <div className="righthero">
            <div className="image-container">
            <img src={profileImg} alt="" />
            </div>
        </div>
   
      </section>
    );
  }
  
  export default HeroSection;