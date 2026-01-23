import { useEffect, useState } from "react";

const sections = ["about", "skills", "experience", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition ${
      active === id
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-bold text-lg text-white">
          Yash
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#experience" className={linkClass("experience")}>Experience</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 py-6 space-y-4">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={linkClass(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
