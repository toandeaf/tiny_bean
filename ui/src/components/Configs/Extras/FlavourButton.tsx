import './Extras.css';
import { FC } from 'react';
import hazelnut from '../../../assets/hazelnut.png';

const FlavourButton: FC = () => {
  return (
    <button className={'extra-button'}>
      <div className={'extra-button-elements'}>
        <img
          className={'extra-button-image'}
          src={hazelnut}
          alt="flavour picture"
        />
        <div>Add-ons</div>
      </div>
    </button>
  );
};

export default FlavourButton;
