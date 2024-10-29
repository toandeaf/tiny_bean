import './Configs.css';
import { useState } from 'react';
import takeway_s from '../../assets/takeway_s.png';
import takeway_m from '../../assets/takeway_m.png';
import takeway_l from '../../assets/takeway_l.png';

import { Size as OrderSize } from '../../types/types';

type SizeBars = {
  size: OrderSize;
  imageSrc?: string;
};

const SIZES: SizeBars[] = [
  { size: OrderSize.SMALL, imageSrc: takeway_s },
  { size: OrderSize.MEDIUM, imageSrc: takeway_m },
  { size: OrderSize.LARGE, imageSrc: takeway_l },
];

const Size = () => {
  const [selected, setSelected] = useState<OrderSize>(OrderSize.MEDIUM);

  // TODO - replace these wee circles with coffee cups with letters?
  return (
    <div className={'size-container'}>
      {SIZES.map((size) => {
        return (
          <button
            className={`size-button ${selected === size.size ? 'selected' : ''}`}
            onClick={() => setSelected(size.size)}
          >
            <img
              src={size.imageSrc}
              alt="size"
              style={{ height: '1.7em', width: '1.7em' }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Size;
