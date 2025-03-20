const Footer = () => {
  return (
    <>
      <footer className="flex justify-between px-8 py-6">
        <a href="/">
          <img src="logo.png" alt="logo" className="aspect-auto w-32 " />
        </a>
        <p className="text-white font-thin font-heading">
          Made By{" "}
          <a
            href="https://subodhgalande.netlify.app"
            target="_blank"
            className="text-accent inline-block hover:underline hover:underline-offset-4 "
          >
            Subodh Galande
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
