import logo from '../../assets/images/logo-sans-bg.png';

const Header = () => {
  return (
    <header className="w-full h-16 bg-white shadow">
      <div className="container mx-auto flex items-center h-full justify-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
    </header>
  );
};

export default Header;
