import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I'm Sarfaraj Molla, a Computer Science student at Techno India University, passionate about AI/ML and Full-Stack Development.
      I've built impactful projects like a Smart Fragrance Diffuser with Emotion Detection and a Photo Sharing App with Maps integration.
      With experience from internships at AICTE and ONI Cares, I’ve worked on real-world solutions using ReactJS, NodeJS, TensorFlow, and OpenCV.
      I'm also a core team member at GDSC TIU, actively exploring new tech to create meaningful products.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
