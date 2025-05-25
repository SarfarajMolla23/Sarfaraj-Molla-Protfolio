import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  const isLeft = align === "left";

  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-2">
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            isLeft ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 sm:justify-center ${
            isLeft ? "md:justify-end" : "md:justify-start"
          }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      {/* Image Section */}
      <div className="max-h-[220px] max-w-[400px] relative rounded-xl overflow-hidden border border-white hover:scale-110 transform transition-all duration-500">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
