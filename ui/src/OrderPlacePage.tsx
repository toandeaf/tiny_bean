import tinyBeanLogo from './assets/coffee-bean.png';
import LinkButton from './LinkButton.tsx';

const OrderPlacePage = () => {
  return (
    <div>
      <div>
        <a target="_blank">
          <img src={tinyBeanLogo} className="logo react" alt="tiny bean logo" />
        </a>
      </div>
      <h1>tinyBean</h1>

      <p className="subtitle">Place orders</p>
      <LinkButton text={'Switch to View Orders'} href={'/orders/view'} />
    </div>
  );
};

export default OrderPlacePage;
