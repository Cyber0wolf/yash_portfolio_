import { motion } from "framer-motion";

const skillVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SkillCard = ({ title, skills, accent }) => (
  <motion.div
    variants={skillVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative group"
  >
    {/* Glow */}
    <div
      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
      transition duration-500 blur-xl ${accent.replace("border", "bg")}/30`}
    />

    {/* Glass Card */}
    <div
      className={`relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl 
      border border-white/10 border-l-4 ${accent}
      hover:scale-[1.06] transition-all duration-500
      shadow-lg hover:shadow-2xl`}
    >
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-white/10 px-4 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-20 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* DATA ANALYST */}
          <SkillCard
            title="Data Analyst"
            skills={[
              "Python",
              "Pandas",
              "NumPy",
              "EDA",
              "SQL",
              "Power BI",
              "Excel",
              "Data Visualization",
            ]}
            accent="border-blue-500"
          />

          {/* MACHINE LEARNING */}
          <SkillCard
            title="Machine Learning"
            skills={[
              "Scikit-learn",
              "Classification",
              "Regression",
              "Feature Engineering",
              "Model Evaluation",
              "OpenCV",
            ]}
            accent="border-green-500"
          />

          {/* WEB DEVELOPMENT */}
          <SkillCard
            title="Web Development"
            skills={[
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "REST APIs",
              "Git & GitHub",
            ]}
            accent="border-purple-500"
          />

        </div>
      </div>
    </section>
  );
};

export default Skills;
