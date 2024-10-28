import './Configs.css';
import { useState } from 'react';

type LocalSize = 'S' | 'M' | 'L';

const Size = () => {
  const [selected, setSelected] = useState<LocalSize>('M');

  // TODO - replace these wee circles with coffee cups with letters?
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <button
        className={`size-button ${selected === 'S' ? 'selected' : ''}`}
        onClick={() => setSelected('S')}
      >
        S
      </button>
      <button
        className={`size-button ${selected === 'M' ? 'selected' : ''}`}
        onClick={() => setSelected('M')}
      >
        M
      </button>
      <button
        className={`size-button ${selected === 'L' ? 'selected' : ''}`}
        onClick={() => setSelected('L')}
      >
        L
      </button>
    </div>
  );
};

export default Size;
