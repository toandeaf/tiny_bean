import '../Configs.css';
import { FC, useState } from 'react';
import notepad from '../../../assets/notepad.png';
import Modal from '../../Modal/Modal.tsx';
import ActionButtons from '../../ActionButtons.tsx';

const FlavourButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={'extra-button'} onClick={() => setIsModalOpen(true)}>
        <div className={'extra-button-elements'}>
          <img
            className={'extra-button-image'}
            src={notepad}
            alt="note picture"
          />
          <div>Note</div>
        </div>
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={'Add note'}
      >
        <textarea style={{ width: '100%' }} rows={5}></textarea>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '0.5em',
          }}
        >
          <ActionButtons
            primaryText={'Add note'}
            primaryAction={() => {}}
            cancelText={'Clear'}
            cancelAction={() => {}}
          />
        </div>
      </Modal>
    </>
  );
};

export default FlavourButton;
