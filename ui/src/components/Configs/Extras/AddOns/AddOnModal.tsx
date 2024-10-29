import ActionButtons from '../../../ActionButtons.tsx';
import Modal from '../../../Modal/Modal.tsx';
import { FC } from 'react';
import { EXTRAS, SYRUPS } from '../../../../data/addOnOptions.ts';
import AddOnSection from './AddOnSection.tsx';

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
      <AddOnSection title={'Syrups'} options={SYRUPS} />
      <AddOnSection title={'Extras'} options={EXTRAS} />

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
