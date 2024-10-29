import AddOns from './AddOns.tsx';
import NoteButton from './NoteButton.tsx';
import './Extras.css';

const Extras = () => {
  return (
    <div className={'extras-container'}>
      <span>Extras</span>
      <div className={'extras-buttons'}>
        <AddOns />
        <NoteButton />
      </div>
    </div>
  );
};

export default Extras;
