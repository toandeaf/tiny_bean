import { useNavigate } from 'react-router-dom';
import tinyBeanLogo from '../assets/coffee-bean.png';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className={'bannerItems'} onDoubleClick={() => navigate('/')}>
        <img src={tinyBeanLogo} className="bannerLogo" alt="tiny bean logo" />
        <h1 className="title">tinyBean</h1>
      </div>
    </div>
  );
};

export default Banner;
