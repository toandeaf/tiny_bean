import './Configs.css';
import ConfigContainer from './ConfigContainer';
import { useState } from 'react';

const SHOTS = [1, 2, 3, 4, 5];

const Shots = () => {
  const [shots, setShots] = useState<number>(2);

  return (
    <ConfigContainer title={'Shots'}>
      {SHOTS.map((shot) => {
        return (
          <button
            key={shot}
            className={`size-button ${shots === shot ? 'selected' : ''}`}
            onClick={() => setShots(shot)}
          >
            {shot}
          </button>
        );
      })}
    </ConfigContainer>
  );
};

export default Shots;
