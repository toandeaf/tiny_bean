import './Extras.css';
import ExtraButton from './ExtraButton.tsx';
import AddOnModal from './AddOns/AddOnModal.tsx';
import NoteModal from './Notes/NoteModal.tsx';
import { Option } from '../../../types/types.ts';
import { FC } from 'react';
import { ModalTriggerProps } from '../../Modal/Modal.tsx';
import hazelnut from '../../../assets/hazelnut.png';
import note from '../../../assets/notepad.png';

interface OptionWithModal extends Option {
  modal: FC<ModalTriggerProps>;
}

const EXTRAS: Array<OptionWithModal> = [
  { title: 'Add-ons', imageSrc: hazelnut, modal: AddOnModal },
  {
    title: 'Notes',
    imageSrc: note,
    modal: NoteModal,
  },
];

const Extras = () => {
  return (
    <div className={'extras-container'}>
      <span>Extras</span>
      <div className={'extras-buttons'}>
        {EXTRAS.map((extra) => (
          <ExtraButton key={extra.title} option={extra} modal={extra.modal} />
        ))}
      </div>
    </div>
  );
};

export default Extras;
