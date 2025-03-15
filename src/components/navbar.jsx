const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-transparent z-30">
        <div className="text-white text-2xl font-bold">
          <img src="logo.png" alt="logo" className="aspect-auto w-32 " />
        </div>
        <button className="px-6 py-2 border-2 border-accent  rounded-lg hover:bg-accent hover:text-white transition font-sans text-accent ">
          GET IN TOUCH
        </button>
      </nav>
    </>
  );
};

export default Navbar;
