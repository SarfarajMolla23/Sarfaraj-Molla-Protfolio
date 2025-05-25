import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer Intern",
    company: "ONI Cares",
    date: "Feb. 2023 - May 2023",
    responsibilities: [
      "Tech used: ReactJS, Redux, AWS(S3)",
      "Revamped the ONI admin portal UI for the Business Development team.",
      "Built a search feature with filters to find nearby hospitals and doctors.",
    ],
  },
  {
    job: "AICTE – Virtual Internship",
    company: "AI/ML Intern",
    date: "April. 2024 - June 2024",
    responsibilities: [
      "Built ML models using Python, TensorFlow, and OpenCV for tasks like image classification and sentiment analysis.",
      "Deployed solutions on Google Cloud and followed ethical AI practices.",
    ],
  },
  {
    job: "AICTE – Virtual Internship ",
    company: "Network Security Associate Intern",
    date: "Jan. 2024 - March 2024",
    responsibilities: [
      "Used Wireshark, Kali Linux, and Metasploit for network security and threat analysis.",
      "Performed vulnerability assessments and applied mitigation strategies.",
      "Explored ethical hacking.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
