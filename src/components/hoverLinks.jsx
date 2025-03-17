import { useState } from "react";

const HoverLinks = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [linktext, setLinkText] = useState("");
  const [position, setPosition] = useState({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  });

  const handleMouseOver = (e) => {
    let linkPosition = e.target.getBoundingClientRect();
    e.target.innerText;
    setPosition({
      bottom: linkPosition.bottom,
      left: linkPosition.left + 50,
      right: linkPosition.right,
      top: linkPosition.top,
    });
    setIsHovered(true);
    setLinkText(e.target.innerText.trim());
  };

  const linkInfo = {
    future: {
      image: "/clx.jpg",
      title: "Image with Text",
    },
    CyRo: {
      image: "/parts.gif",
      title: "GIF with text",
    },
  };

  return (
    <section className=" sm:h-96 sm:w-full bg-dark flex sm:justify-center sm:items-center">
      <div className=" relative  sm:w-9/12 flex justify-center gap-x-12  border-white sm:mt-20">
        <h1 className="sm:text-5xl font-heading text-accent font-thin">
          Universal <span className="text-white">Factories</span>
        </h1>

        <p className="text-grey sm:text-[18px] font-sans sm:w-3/6">
          Imagine a{" "}
          <a
            onMouseEnter={handleMouseOver}
            onMouseLeave={() => setIsHovered(false)}
            href="/withImage"
            className=" text-accent"
          >
            future
          </a>{" "}
          in which a single factory is capable of manufacturing multiple product
          models and endless product variations. The same factory makes Cars
          today and Mobile Phones tomorrow. This is the future of manufacturing
          we envision with{" "}
          <a
            onMouseEnter={handleMouseOver}
            onMouseLeave={() => setIsHovered(false)}
            href="/withgif"
            className=" text-accent"
          >
            CyRo
          </a>{" "}
          - One Robot for all tasks.
        </p>
        {isHovered && linktext in linkInfo && (
          <div
            className="fixed bg-[#151619] flex flex-col h-fit w-64 gap-2 text-white p-3 rounded-lg shadow-lg transition-opacity duration-300 pointer-events-none"
            style={{
              left: `${position.left}px`,
              top: `${position.top}px`,
              bottom: `${position.bottom}px`,
              right: `${position.right}px`,
            }}
          >
            <img
              src={linkInfo[linktext].image}
              className="h-44 w-full object-cover"
            />
            <h1 className="font-heading text-2xl font-thin text-accent ">
              {linkInfo[linktext].title}
            </h1>
            <p className="font-sans text-[14px] text-grey">
              Click the link to explore detailed insights and learn more about
              this topic
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HoverLinks;
