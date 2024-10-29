import addOns from '../assets/addons.png';
import AddOnModal from '../components/Configs/Extras/AddOns/AddOnModal.tsx';
import note from '../assets/notepad.png';
import NoteModal from '../components/Configs/Extras/Notes/NoteModal.tsx';
import { OptionWithModal } from '../components/Configs/Extras/Extras.tsx';

export const EXTRAS: Array<OptionWithModal> = [
  { title: 'Add-ons', imageSrc: addOns, modal: AddOnModal },
  {
    title: 'Notes',
    imageSrc: note,
    modal: NoteModal,
  },
];
