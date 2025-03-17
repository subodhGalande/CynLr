import { LazyLoadComponent } from "react-lazy-load-image-component";

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
  {
    path: "/robot-5.jpg",
    title: "Convergence of Eyes",
    text: "Ever wondered why all animals 'Converge' their eyes? ",
  },
  {
    path: "/robot-6.jpg",
    title: "Create rich visual",
    text: "'Sight' is not 'Vision'. Vision occurs when sight overlaps with all other senses,",
  },
];

const ImageCarousal = () => {
  return (
    <>
      <section className="mt-32 text-center">
        <h1 className="font-thin font-heading text-5xl leading-16 text-white">
          <span className="text-accent ">Grasp any object</span>
          <br /> without pre-training
        </h1>
        <div className=" h-screen w-full flex flex-wrap gap-4 justify-center mt-20 ">
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
        </div>
      </section>
    </>
  );
};

export default ImageCarousal;
