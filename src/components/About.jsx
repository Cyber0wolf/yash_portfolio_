import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative pt-12 pb-24 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          I’m a <span className="text-white font-semibold">curiosity driven and adaptable</span> individual
          who enjoys understanding how systems work beneath the surface whether it’s data,
          machine learning models, or software architectures. I naturally gravitate toward exploring
          problems deeply rather than applying surface level solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6"
        >
          I learn best by building, experimenting, and iterating. Whether I’m analyzing data,
          developing a backend system, or working with machine learning pipelines,
          I focus on writing clear logic, improving efficiency, and continuously refining my approach.
          I’m comfortable working independently and equally value collaboration within a team.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6"
        >
          I see technology as a space for constant learning and exploration, and I’m motivated by
          environments that challenge me to adapt, grow, and turn ideas into reliable,
          real-world solutions.
        </motion.p>

        {/* Traits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            "Highly Adaptable",
            "Curiosity Driven",
            "Fast Learner",
            "Analytical Thinker",
            "Problem Solver",
            "Explores New Technologies",
          ].map((trait, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10 text-sm"
            >
              {trait}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
