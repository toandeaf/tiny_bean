import FlavourButton from './FlavourButton.tsx';
import NoteButton from './NoteButton.tsx';
import './Extras.css';

const Extras = () => {
  return (
    <div className={'extras-container'}>
      <div>Extras</div>
      <div className={'extras-buttons'}>
        <FlavourButton />
        <NoteButton />
      </div>
    </div>
  );
};

export default Extras;
