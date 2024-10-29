import './Extras.css';
import { FC, useState } from 'react';
import hazelnut from '../../../assets/hazelnut.png';
import AddOnModal from './AddOnModal.tsx';

const AddOns: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={'extra-button'} onClick={() => setIsModalOpen(true)}>
        <div className={'extra-button-elements'}>
          <img
            className={'extra-button-image'}
            src={hazelnut}
            alt="flavour picture"
          />
          <div>Add-ons</div>
        </div>
      </button>
      <AddOnModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default AddOns;
