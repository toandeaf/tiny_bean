import '../Configs.css';
import { FC } from 'react';
import notepad from '../../../assets/notepad.png';

const FlavourButton: FC = () => {
  return (
    <button className={'extra-button'}>
      <div className={'extra-button-elements'}>
        <img
          className={'extra-button-image'}
          src={notepad}
          alt="note picture"
        />
        <div>Note</div>
      </div>
    </button>
  );
};

export default FlavourButton;
