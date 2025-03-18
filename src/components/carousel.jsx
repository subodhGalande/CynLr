import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const containerRef = useRef();
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.to(containerRef.current, {
      rotation: 270, // Full rotation to show all 4 images
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current, // Pinning inside this section only
        start: "top top", // Start when section enters viewport
        end: "bottom top", // Ends when section scrolls out
        scrub: 1.8, // Smooth animation on scroll
        pin: true, // Keeps the container pinned within the section
        anticipatePin: 1, // Helps smooth out pinning
        snap: {
          snapTo: (progress) => Math.round(progress * 3) / 3, // Ensures snapping to the next card
          duration: 0.2, // Quick but smooth snap transition
          ease: "none", // Natural easing effect
        },
      },
    });
  }, []);

  const images = [
    {
      path: "/robot-1.jpg",
      title: "Grasp any object",
      text: "Just like how humans can grasp unknown objects they have never seen before,",
    },
    {
      path: "/robot-2.jpg",
      title: "Learn to manipulate",
      text: "We identify an object by its Shape & Colour.",
    },
    {
      path: "/robot-3.jpg",
      title: "Make oriented placements",
      text: "One can’t build a car by throwing parts at each other.",
    },
    {
      path: "/robot-4.jpg",
      title: "Robots deserve better",
      text: "The Human eye doesn't use different sensors for Motion, Depth, and Colour.",
    },
  ];
  return (
    <>
      <section
        ref={sectionRef}
        className=" relative mt-20 h-screen w-full overflow-hidden text-center"
      >
        <h1
          id="triggerHeading"
          className=" absolute top-10 left-1/2 -translate-x-1/2 text-5xl font-thin font-heading text-white text-center"
        >
          <span className="text-accent ">Grasp any object</span>
          <br /> without pre-training
        </h1>
        <div className=" border-2 w-screen h-screen mx-auto  overflow-hidden ">
          <div
            ref={containerRef}
            className="fixed mt-32 top-1/2 left-52 w-[70rem] h-[70rem] rounded-full border-2 border-grey/10 flex items-center justify-center"
          >
            {/* top center */}
            <div className=" absolute left-1/2 -top-72 -translate-x-1/2 rotate-0 flex-col flex bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden">
              <div className=" w-full h-5/6 overflow-hidden rounded-lg ">
                <img
                  loading="lazy"
                  src={images[0].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-accent">
                  {images[0].title}
                </h2>
                <p className="mt-2 text-sm text-grey">{images[0].text}</p>
              </div>
            </div>
            {/* right center */}
            <div className=" absolute -right-72 top-1/2 -translate-y-1/2 rotate-90  flex flex-col  bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden ">
              <div className="w-full h-5/6 overflow-hidden  rounded-lg ">
                <img
                  loading="lazy"
                  src={images[1].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-accent">
                  {images[1].title}
                </h2>
                <p className="mt-2 text-sm text-grey">{images[1].text}</p>
              </div>
            </div>

            {/* top left */}
            <div className=" -left-72 top-1/2 -translate-y-1/2 -rotate-90 absolute flex flex-col bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden ">
              <div className=" w-full h-5/6 rounded-lg overflow-hidden ">
                <img
                  loading="lazy"
                  src={images[2].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-accent">
                  {images[2].title}
                </h2>
                <p className="mt-2 text-sm text-grey">{images[2].text}</p>
              </div>
            </div>
            {/* bottom left */}
            <div className=" absolute left-1/2 -bottom-72 flex flex-col -translate-x-1/2 rotate-180 bg-[#151619] rounded-xl h-[500px] w-[500px] shadow-lg overflow-hidden ">
              <div className=" w-full h-5/6 overflow-hidden  rounded-lg ">
                <img
                  loading="lazy"
                  src={images[3].path}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-accent">
                  {images[3].title}
                </h2>
                <p className="mt-2 text-sm text-grey">{images[3].text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" h-screen w-full flex flex-wrap gap-4 justify-center mt-20 ">
          {images.map((item, index) => (
            <div
              key={index}
              className="    bg-[#151619] rounded-xl h-fit w-[22rem] shadow-lg overflow-hidden"
            >
              <div className="relative w-full aspect-[3/4] p-4 rounded-lg ">
                <img loading="lazy" src={item.path} className="rounded-lg" />
              </div>
              <div className="p-4 text-start">
                <h2 className="text-2xl font-thin font-heading text-accent">
                  {item.title}
                </h2>
                <p className="mt-2 text-grey">{item.text}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="h-screen w-full"></div>
      </section>
    </>
  );
};

export default Carousel;
