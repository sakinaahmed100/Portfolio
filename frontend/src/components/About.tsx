import "../styles/About.css"
import coderImg from "../assets/coder.svg"
import 'animate.css';

export default function About() {
  return (
    <section className="aboutSection">
      <div className="aboutWrapperDiv">
        <div className="about_div">
          <div className="leftabout">
            <div className="image-container_about animate__headShake animate__slow animate__animated animate__infinite">
              <img src={coderImg} alt="" />
            </div>
          </div>
          <div className="rightabout">
            <h1>
              Who am I?
            </h1>
            <p>Hi, I'm Sakina Ahmed, a passionate web developer specializing in creating beautiful, functional, and user-friendly websites. With a strong foundation in front-end and back-end development.</p>

            <br />
            <p>I thrive on challenges and am constantly pushing myself to learn new technologies and improve my skills. From building dynamic single-page applications to crafting responsive designs, I ensure every project I work on is not only visually stunning but also highly functional.</p>
          </div>
        </div>
      </div>



    </section>
  )
}
