import Modal, { ModalTriggerProps } from '../../../Modal/Modal.tsx';
import { FC } from 'react';
import Notes from './Notes.tsx';
import ModalButtons from '../../../Modal/ModalButtons.tsx';

const NoteModal: FC<ModalTriggerProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={'Add note'}
    >
      <Notes />
      <ModalButtons
        primaryText={'Add note'}
        primaryAction={() => {}}
        cancelText={'Clear'}
        cancelAction={() => {}}
      />
    </Modal>
  );
};

export default NoteModal;
