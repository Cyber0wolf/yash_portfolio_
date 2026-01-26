import { motion } from "framer-motion";

/* Card animation */
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Glass + Glow Project Card */
const ProjectCard = ({ title, description, tech, accent }) => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative group"
  >
    {/* Glow Layer */}
    <div
      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
      transition duration-500 blur-xl ${accent.replace("border", "bg")}/30`}
    />

    {/* Glass Card */}
    <div
      className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl 
      border border-white/10 border-l-4 ${accent}
      hover:scale-[1.07] transition-all duration-500
      shadow-lg hover:shadow-2xl`}
    >
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-white/10 px-3 py-1 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* Animated Section Title */
const SectionTitle = ({ title, color }) => (
  <motion.h3
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`text-2xl font-semibold mb-8 ${color}`}
  >
    {title}
  </motion.h3>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-20 text-center"
        >
          Projects
        </motion.h2>

        {/* DATA ANALYST */}
        <div className="relative mb-28">
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
          <SectionTitle title="Data Analyst" color="text-blue-400" />

          <div className="grid md:grid-cols-3 gap-10">
            <ProjectCard
              title="Employee Attrition Analysis"
              description="Identified key factors affecting employee attrition using EDA."
              tech={["Python", "Pandas", "EDA"]}
              accent="border-blue-500"
            />
            <ProjectCard
              title="High Value Customer Prediction"
              description="Predicted high-value customers using data-driven techniques."
              tech={["Python", "ML", "Analytics"]}
              accent="border-blue-500"
            />
            <ProjectCard
              title="Zomato Data Analysis"
              description="Insights on pricing, ratings, and restaurant trends."
              tech={["Python", "EDA", "Visualization"]}
              accent="border-blue-500"
            />
            <ProjectCard
              title="Dynamic Data Analytics Dashboard"
              description="Built a dynamic dashboard that analyzes any uploaded dataset and automatically generates insights, statistics, and interactive visualizations."
              tech={["Python", "Flask", "Pandas", "EDA", "Chart.js"]}
              accent="border-cyan-500"
            />
          </div>
        </div>

        {/* MACHINE LEARNING */}
        <div className="relative mb-28">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-green-500/20 blur-3xl rounded-full" />
          <SectionTitle title="Machine Learning" color="text-green-400" />

          <div className="grid md:grid-cols-3 gap-10">
            <ProjectCard
              title="Face Recognition System"
              description="Face recognition using OpenCV and ML techniques."
              tech={["Python", "OpenCV", "ML"]}
              accent="border-green-500"
            />
            <ProjectCard
              title="Customer Intelligence Platform"
              description="Built an end-to-end machine learning application to predict customer churn, segment users, and generate actionable business recommendations through an interactive dashboard."
              tech={["Python", "Scikit-learn", "Pandas", "Streamlit", "KMeans", "Random Forest"]}
              accent="border-green-500"
            />
          </div>
        </div>

        {/* WEB DEVELOPMENT */}
        <div className="relative">
          <div className="absolute -bottom-16 left-1/3 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
          <SectionTitle title="Web Development" color="text-purple-400" />

          <div className="grid md:grid-cols-3 gap-10">
            <ProjectCard
              title="Car Rental Web Application"
              description="Car rental platform with booking and responsive UI."
              tech={["Django", "Python", "Django Admin", "PostgreSQL"]}
              accent="border-purple-500"
            />
             <ProjectCard
              title="Tindog - Dog Dating Website"
              description="A playful dog dating site with responsive design."
              tech={["HTML", "CSS", "bootstrap"]}
              accent="border-purple-500"
            />
            <ProjectCard
              title="Interactive Analytics Web Application"
              description="Developed a full-stack web application with dynamic dashboards, file upload handling, and real-time data visualization."
              tech={["Flask", "HTML", "CSS", "Bootstrap", "Chart.js"]}
              accent="border-purple-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
