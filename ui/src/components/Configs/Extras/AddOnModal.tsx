import AddOnOption from './AddOnOption.tsx';
import ActionButtons from '../../ActionButtons.tsx';
import Modal from '../../Modal/Modal.tsx';
import { FC } from 'react';
import { EXTRAS, SYRUPS } from '../../../data/addOnOptions.ts';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const AddOnModal: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={'Add-ons'}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <div>Syrups</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
          {SYRUPS.map((syrup) => (
            <AddOnOption title={syrup.title} imageSrc={syrup.imageSrc} />
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <div>Extras</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
          {EXTRAS.map((syrup) => (
            <AddOnOption title={syrup.title} imageSrc={syrup.imageSrc} />
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '0.5em',
        }}
      >
        <ActionButtons
          primaryText={'Confirm add-ons'}
          primaryAction={() => {}}
          cancelText={'Clear'}
          cancelAction={() => {}}
        />
      </div>
    </Modal>
  );
};

export default AddOnModal;
