const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-transparent z-30">
        <div className="text-white text-2xl font-bold">
          <a href="/">
            <img src="logo.png" alt="logo" className="aspect-auto w-32 " />
          </a>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="#3d"
            className="text-white hover:text-accent hover:duration-150"
          >
            Configurator
          </a>
          <a
            href="#carousel"
            className="text-white hover:text-accent hover:duration-150"
          >
            Carousel
          </a>
          <a
            href="https://www.cynlr.com/"
            target="_blank"
            className="px-6 py-2 border-2 border-accent hover:duration-150 rounded-lg hover:bg-accent hover:text-black transition font-sans text-accent "
          >
            GET IN TOUCH
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
