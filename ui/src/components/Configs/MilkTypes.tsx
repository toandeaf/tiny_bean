import './Configs.css';
import ConfigContainer from './ConfigContainer';
import { useState } from 'react';
import { MilkType } from '../../types/types.ts';

const MILK_TYPES: Array<MilkType> = [
  MilkType.WHOLE,
  MilkType.SKIM,
  MilkType.OAT,
  MilkType.ALMOND,
];

const MilkTypes = () => {
  const [milkType, setMilkType] = useState<MilkType>(MilkType.WHOLE);
  
  return (
    <ConfigContainer title={'Milk Type'}>
      {MILK_TYPES.map((type) => {
        return (
          <button
            key={type}
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

export default MilkTypes;
