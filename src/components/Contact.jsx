const Contact = () => {
  return (
    <section id="contact" className=" text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for internships, projects, or collaborations.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
          <a
            href="mailto:yash2005vish@gmail.com"
            className="border px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            📧 Email
          </a>

          <a
            href="https://www.linkedin.com/in/yash-vishwakarma-ba44012b2/"
            target="_blank"
            className="border px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/Cyber0wolf"
            target="_blank"
            className="border px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
