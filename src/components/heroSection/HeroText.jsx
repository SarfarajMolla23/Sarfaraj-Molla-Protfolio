import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Full-Stack Developer | MERN Stack Expert | AI & Computer Vision Enthusiast
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Sarfaraj <br className="sm:hidden md:block" />
        Molla
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        Full-Stack Web Developer & AI Enthusiast <br /> with 2+ years of experience building  <br/> scalable MERN stack applications <br /> and AI-powered solutions.
      </motion.p>
      <motion.a
        href="../../public/images/Sarfaraj_Molla_CV.pdf"
        download
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="inline-block w-fit px-6 py-3 mt-6 rounded-2xl bg-orange text-white  font-semibold hover:bg-orange/90 transition"
      >
        Download Resume
      </motion.a>
    </div>
  );
};

export default HeroText;
