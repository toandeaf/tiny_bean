import '../Configs.css';
import { FC } from 'react';
import notepad from '../../../assets/notepad.png';

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
          src={notepad}
          alt="lilpic"
          style={{ height: '1.5em', width: '1.5em' }}
        />
        <div>Note</div>
      </div>
    </button>
  );
};

export default FlavourButton;
