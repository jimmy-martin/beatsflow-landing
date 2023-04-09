import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/twitter.svg';
import LandingPageFooterButton from './LandingPageFooterButton';

const LandingPageFooterSocials = () => {
  return (
    <div className="flex justify-center mt-3">
      <LandingPageFooterButton icon={FacebookIcon} text="Facebook" />
      <LandingPageFooterButton icon={TwitterIcon} text="Twitter" />
    </div>
  );
};

export default LandingPageFooterSocials;
