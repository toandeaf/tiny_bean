import Modal, { ModalTriggerProps } from '../../../Modal/Modal.tsx';
import ActionButtons from '../../../ActionButtons.tsx';
import { FC } from 'react';
import Notes from './Notes.tsx';

const NoteModal: FC<ModalTriggerProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={'Add note'}
    >
      <Notes />
      <div>
        <ActionButtons
          primaryText={'Add note'}
          primaryAction={() => {}}
          cancelText={'Clear'}
          cancelAction={() => {}}
        />
      </div>
    </Modal>
  );
};

export default NoteModal;
