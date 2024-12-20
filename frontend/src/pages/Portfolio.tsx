import "../styles/Portfolio.css"
import Card from "../components/Card";
import ecom_project from "../assets/ecom.png"
import weather from "../assets/weather.jpg"
import blog from "../assets/blog.jpg"
import movie from "../assets/movie.jpg"
import 'animate.css';


const Portfolio = () => {
  const projects = [
    {
      image: ecom_project,
      title: "Save Wave",
      techStack: ["React", "Tailwind CSS", "Vercel"],
      description: "Used React to create a visually appealing and responsive user interface that seamlessly connects to external APIs to display a wide range of products. React Router DOM implementation ensures smooth navigation, while robust cart functionality.",
      liveLink: "https://shop-ecom-ten.vercel.app/",
      repoLink: "https://github.com/sakinaahmed100/shop_ecom/",
    },
    {
      image: weather,
      title: "Weather Wise",
      techStack: ["React.js", "Axios", "Styled Components"],
      description: "Get real-time weather data with the React-based Weather App. Enter a city name, and the app fetches temperature, feels-like temp, weather description, wind speed, and more. Demonstrates React hooks, API use, and responsive design..",
      liveLink: "https://weatherapp-zfmv.vercel.app/",
      repoLink: "https://github.com/sakinaahmed100/weatherapp",
    },
    {
      image: blog,
      title: "Lively Voices",
      techStack: ["Next.js", "CSS", "FirebaseDB","FirebaseAuth"],
      description: "Dynamic blog website built using Next.js, a React framework for server-side rendering. The website enables users to write and post blogs on various topics. It incorporates Firebase authentication for sign-up and sign-in functionality. User-generated content is storedin a Firebase database.",
      liveLink: "https://blog-next-ten-sepia.vercel.app/",
      repoLink: "https://github.com/username/project2",
    },
    {
      image: movie,
      title: "Film Flick",
      techStack: ["Next.js", "CSS",],
      description: "Movie Website using Next.js Welcome to the Movie Website built using Next.js! This project is a simple movie website that fetches movie data from an API and displays it on the website. It's a great starting point for learning about Next.js and integrating APIs into your projects.",
      liveLink: "https://movie-web-pied.vercel.app/movies",
      repoLink: "https://github.com/sakinaahmed100/movie_web",
    },
    // Add more projects here
  ];

  return (
    <section>
    <div className="portfolio animate__flash animate__slow animate__animated">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
    </section>
  );
};

export default Portfolio;

