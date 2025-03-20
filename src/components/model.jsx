import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "../../public/Scene";

const Model3d = () => {
  const [color, setColor] = useState("#986deb");

  return (
    <>
      <section id="3d" className="h-screen scroll-mt-10 w-full">
        <h1 className=" text-5xl mt-32 font-thin font-heading text-white text-center">
          <span className="text-accent ">3D </span>
          Configurator
        </h1>
        <div className=" flex  w-5/6 mx-auto mt-20 h-4/6">
          <div className=" p-5 w-1/2 h-full border-white">
            <p className="text-[16px] font-sans text-grey">
              Imagine a future in which a single factory is capable of
              manufacturing multiple product models and endless product
              variations. The same factory makes Cars today and Mobile Phones
              tomorrow. This is the future of manufacturing we envision with
              CyRo - One Robot for all tasks.
            </p>
            <p className="text-[16px] font-bold mt-4 font-sans text-grey">
              Choose colour for your car:
            </p>
            <div className="flex justify-evenly mt-10 gap-4 my-4">
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-grey ring-offset-2  bg-[#986deb] "
                onClick={() => setColor("#986deb")}
              ></button>
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-grey ring-offset-2  bg-[#00AAAF]"
                onClick={() => setColor("#00AAAF")}
              ></button>
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-grey ring-offset-2  bg-[#EBEBED]"
                onClick={() => setColor("#EBEBED")}
              ></button>
              <button
                className="px-4 py-2 rounded-full h-10 w-10 ring-2 hover:scale-110 hover:duration-150 ring-grey ring-offset-2  bg-[#FEE300]"
                onClick={() => setColor("#FEE300")}
              ></button>
            </div>
            ;
          </div>
          <div className="border-white w-1/2 h-full bg-[#151619] rounded-lg ">
            <Canvas
              camera={{ position: [0, 2, 5], fov: 50 }}
              className="-mt-15 p-4"
            >
              <ambientLight intensity={2} />
              <directionalLight position={[5, 20, 5]} intensity={8} />
              <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 2}
                enablePan={false}
              />
              <Suspense fallback={null}>
                <Model color={color} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
};

export default Model3d;
