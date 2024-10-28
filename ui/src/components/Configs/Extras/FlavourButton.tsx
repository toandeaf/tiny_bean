import '../Configs.css';
import { FC } from 'react';
import hazelnut from '../../../assets/hazelnut.png';

const FlavourButton: FC = () => {
  return (
    <button className={'extra-button'}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5em',
        }}
      >
        <img
          src={hazelnut}
          alt="lilpic"
          style={{ height: '1.5em', width: '1.5em' }}
        />
        <div>Flavour</div>
      </div>
    </button>
  );
};

export default FlavourButton;
