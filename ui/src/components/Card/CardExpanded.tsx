import { FC } from 'react';
import { CardProps } from './Card.tsx';
import CardBanner from './CardBanner.tsx';
import './CardExpanded.css';

const CardExpanded: FC<Omit<CardProps, 'onClick'>> = ({ option }) => {
  return (
    <div key={option.title} className="card-expanded">
      <CardBanner title={option.title} imageSrc={option.imageSrc} />
      <div className="options">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
      <div className="options">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
      <div className="options">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
      <div className="options">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
    </div>
  );
};

export default CardExpanded;
