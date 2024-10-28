import FlavourButton from './FlavourButton.tsx';
import NoteButton from './NoteButton.tsx';

const Extras = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4em',
        }}
      >
        <div>Extras</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
            flexWrap: 'wrap',
          }}
        >
          <FlavourButton />
          <NoteButton />
        </div>
      </div>
    </div>
  );
};

export default Extras;
