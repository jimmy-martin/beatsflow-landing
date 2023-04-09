import logo from '../../../assets/images/logo-sans-bg.png';

const LandingPageHeader = () => {
  return (
    <header className="w-full py-4 shadow" style={{ backgroundColor: '#15A492' }}>
      <div className="container mx-auto flex items-center h-full justify-center">
        <img src={logo} alt="Logo" className="h-20 w-20 md:h-30 md:w-30" />
      </div>
    </header>
  );
};

export default LandingPageHeader;
