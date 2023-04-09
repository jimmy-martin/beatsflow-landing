import LandingPageFooterSocials from './LandingPageFooterSocials';

const LandingPageFooter = () => {
  return (
    <footer className="absolute w-full">
      <div className="p-4 bg-black text-center">
        <h1 className="text-white">Beats Flow</h1>
        <LandingPageFooterSocials />
        <hr className="h-px my-8 mx-16 lg:mx-32 border-0" style={{ backgroundColor: '#F8F9FA' }} />
        <p className="text-white">© 2023 Beats Flow · Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
