const LandingPageSection = ({ title, content, imgSource, imgAlt }) => {
  return (
    <section className="w-full grid grid-cols-1 mb-10">
      <img src={imgSource} alt={imgAlt} className="my-2 justify-self-center lg:justify-self-start" />
      <h2 className="text-xl font-bold mb-10">{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default LandingPageSection;
