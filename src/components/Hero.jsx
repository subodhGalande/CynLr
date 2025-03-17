import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50 w-full h-full"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <img src="/logo.png" alt="cynlr" className=" aspect-auto w-5xl " />
          <p className="mt-13 text-white text-3xl font-heading ">
            Robot that's <strong className="text-accent ">"Intuitive" </strong>
            with Objects
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
