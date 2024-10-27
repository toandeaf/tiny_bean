import tinyBeanLogo from './assets/coffee-bean.png';
import LinkButton from './LinkButton.tsx';

const OrderViewPage = () => {
  return (
    <div>
      <div>
        <a target="_blank">
          <img src={tinyBeanLogo} className="logo react" alt="tiny bean logo" />
        </a>
      </div>
      <h1>tinyBean</h1>

      <p className="subtitle">View orders</p>
      <LinkButton text={'Switch to Place Orders'} href={'/orders/place'} />
    </div>
  );
};

export default OrderViewPage;
