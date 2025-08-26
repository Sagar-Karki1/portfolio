const Navbar = () => {
  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-gray-900">Sagar Karki</div>
            <div className="hidden font-medium md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="/skills"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Skills
              </a>
              <a
                href="/projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Resume
              </a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
