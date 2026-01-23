const Footer = () => {
  return (
    <footer className=" text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Yash Vishwakarma · Built with React & Tailwind
      </div>
    </footer>
  );
};

export default Footer;
