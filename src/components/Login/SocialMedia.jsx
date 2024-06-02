import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './css/login.css';

const SocialMedia = () => {

  return (
    <div className="social-icons">
      <a href="#" className="icon">
        <FontAwesomeIcon icon={faGooglePlusG} />
      </a>
      <a href="#" className="icon">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" className="icon">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="#" className="icon">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};

export default SocialMedia;