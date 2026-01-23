import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg"
        >
          {/* Role & Company */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-2xl font-semibold">
              Software Developer — Tech Team
            </h3>
            <span className="text-sm text-gray-400 mt-2 md:mt-0">
              March 7, 2025 – July 17, 2025
            </span>
          </div>

          {/* Company */}
          <p className="text-gray-300 mb-4">
            Tech/xp · Goregaon
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed">
            Worked as a Software Developer in the Tech Team, contributing to application development,
            problem-solving, and implementation of technical solutions. Collaborated with team members
            to understand requirements, improve system functionality, and explore efficient approaches
            to development.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Software Development",
              "Problem Solving",
              "Team Collaboration",
              "Learning & Adaptability",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
