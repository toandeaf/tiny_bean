import './Configs.css';
import ConfigContainer from './ConfigContainer';
import { useState } from 'react';

const MILK_TYPES = ['Full', 'Skimmed', 'Oat', 'Almond'];
const MilkType = () => {
  const [milkType, setMilkType] = useState<string>('Full');
  return (
    <ConfigContainer title={'Milk Type'}>
      {MILK_TYPES.map((type) => {
        return (
          <button
            className={`size-button ${milkType === type ? 'selected' : ''} milk`}
            onClick={() => setMilkType(type)}
          >
            {type}
          </button>
        );
      })}
    </ConfigContainer>
  );
};

export default MilkType;
