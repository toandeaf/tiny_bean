import './Configs.css';
import { useState } from 'react';

type LocalSize = 'S' | 'M' | 'L';

const SIZES: Array<LocalSize> = ['S', 'M', 'L'];
const Size = () => {
  const [selected, setSelected] = useState<LocalSize>('M');

  // TODO - replace these wee circles with coffee cups with letters?
  return (
    <div className={'size-container'}>
      {SIZES.map((size) => {
        return (
          <button
            className={`size-button ${selected === size ? 'selected' : ''}`}
            onClick={() => setSelected(size)}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};

export default Size;
