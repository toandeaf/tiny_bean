import LinkButton from '../components/LinkButton.tsx';
import tinyBeanLogo from '../assets/coffee-bean.png';

const LandingPage = () => {
  return (
    <div className={'container'}>
      <div>
        <div>
          <a target="_blank">
            <img
              src={tinyBeanLogo}
              className="logo react"
              alt="tiny bean logo"
            />
          </a>
        </div>
        <h1>tinyBean</h1>

        <p className="subtitle">Lightweight coffee processing software.</p>
        <LinkButton text={'Place Orders'} primary href={'/orders/place'} />
        <LinkButton text={'View Orders'} href={'/orders/view'} />
      </div>
    </div>
  );
};

export default LandingPage;
