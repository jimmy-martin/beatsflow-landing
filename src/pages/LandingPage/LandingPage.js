import Hero from '../../components/Hero/Hero';
import LandingPageFooter from '../../components/LandingPage/LandingPageFooter/LandingPageFooter';
import LandingPageHeader from '../../components/LandingPage/LandingPageHeader/LandingPageHeader';
import LandingPageMain from '../../components/LandingPage/LandingPageMain/LandingPageMain';

const LandingPage = () => {
  return (
    <div className="relative h-screen">
      <LandingPageHeader />
      <Hero />
      <LandingPageMain />
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
