import './Configs.css';
import ConfigContainer from './ConfigContainer';

const MilkType = () => {
  return (
    <ConfigContainer title={'Milk Type'}>
      <button>Full</button>
      <button>Skimmed</button>
      <button>Oat</button>
      <button>Almond</button>
    </ConfigContainer>
  );
};

export default MilkType;
