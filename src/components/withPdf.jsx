import Navbar from "./navbar";
const WithPDF = () => {
  return (
    <>
      <Navbar />
      <section className="flex mt-4 h-screen w-full justify-center items-center">
        <div className="flex gap-6 w-9/12 h-8/12  mx-auto ">
          <div className="h-full w-fit">
            <iframe
              src="https://drive.google.com/file/d/1yqHggDZ_1jAx7buiD8mnqQYaTyUvU1nt/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="h-full flex gap-y-9 flex-col justify-center w-1/2 text-white p-5">
            <div className="flex flex-col gap-y-1">
              <p className="font-heading  text-[16px] text-white">Task 3</p>
              <h1 className="font-heading font-thin text-5xl text-accent">
                PDF with Text
              </h1>
            </div>
            <p className="font-sans text-[18px] text-grey">
              An Intelligence stack that instinctively sees any object in any
              environment, with NO training. Just like a baby's brain, this
              unique HW & SW Vision Platform allows building of machines that
              are intuitive about objects like never before - From Robots
              assembling parts in Factory lines to Autonomous Driver Assistance
              to Object Search.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WithPDF;
