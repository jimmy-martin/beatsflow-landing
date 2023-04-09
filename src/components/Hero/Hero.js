import hero from '../../assets/images/rectangle-47.png';

const Hero = () => {
  return (
    <div className="w-full text-white text-center px-24 bg-repeat-x" style={{ backgroundImage: `url(${hero})` }}>
      <div className="flex flex-col items-center py-20">
        <h1 className="text-xl mb-16">
          Bienvenue sur notre site de vente de beats de haute qualité
        </h1>
        <p className="mb-16">
          Rejoignez notre communauté de musiciens passionnés et commencez à créer des morceaux qui
          impressionneront votre public.
        </p>
        <button className='rounded-md p-3 font-bold' style={{backgroundColor: "#00EF7E"}}>CONTACTEZ-NOUS</button>
      </div>
    </div>
  );
};

export default Hero;
