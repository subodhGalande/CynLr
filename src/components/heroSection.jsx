import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "./navbar";

const HeroSection = () => {
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  const handleVideoEnd = () => {
    gsap.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 50 });
  });

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnded={handleVideoEnd}
        >
          <source src="hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50 w-full h-full"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <img
            ref={logoRef}
            src="/logo.png"
            alt="cynlr"
            className=" aspect-auto w-5xl "
          />
          <p ref={textRef} className="mt-13 text-white text-3xl font-heading ">
            Robot that's <strong className="text-accent ">"Intuitive" </strong>
            with Objects
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
