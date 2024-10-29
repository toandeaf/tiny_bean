import { FC, useState } from 'react';
import { Option } from '../../../types/types.ts';
import { ModalTriggerProps } from '../../Modal/Modal.tsx';

interface Props {
  option: Option;
  modal: FC<ModalTriggerProps>;
}

const ExtraButton: FC<Props> = ({ option, modal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={'extra-button'} onClick={() => setIsModalOpen(true)}>
        <div className={'extra-button-elements'}>
          <img
            className={'extra-button-image'}
            src={option.imageSrc}
            alt={option.title}
          />
          <div>{option.title}</div>
        </div>
      </button>
      {modal({ isModalOpen, setIsModalOpen })}
    </>
  );
};

export default ExtraButton;
