import ConfigContainer from '../ConfigContainer.tsx';
import '../Configs.css';

const Flavouring = () => {
  return (
    <ConfigContainer title={'Flavouring'}>
      <button>Caramel</button>
      <button>Hazelnut</button>
      <button>Mint</button>
      <button>Vanilla</button>
    </ConfigContainer>
  );
};

export default Flavouring;
