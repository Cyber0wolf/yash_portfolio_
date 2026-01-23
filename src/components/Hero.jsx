import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 flex flex-col justify-center items-center text-center px-6 text-white">

      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Yash Vishwakarma
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl md:text-2xl text-gray-300 mb-6"
      >
        Data Analyst · Machine Learning · Web Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-xl text-gray-400 mb-10"
      >
        I build data-driven solutions, intelligent ML models, and modern web experiences.
      </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="
            flex flex-col sm:flex-row 
            gap-4 sm:gap-6 
            items-center justify-center
            w-full
            max-w-sm sm:max-w-xl
            mx-auto
          "
        >
      
        <a
          href="#projects"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-white text-black font-semibold transition active:scale-95"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-white/30 text-white transition active:scale-95"
        >
          Contact Me
        </a>

        <a
          href="/Yash_Vishwakarma_CV.pdf"
          download
          className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-white/30 text-white transition active:scale-95"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};
export default Hero;
