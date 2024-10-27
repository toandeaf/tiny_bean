import { FC } from 'react';
import { CardProps } from './Card.tsx';

const CardExpanded: FC<CardProps> = ({ title, imageSrc, type, onClick }) => {
  return (
    <div key={title} className="card expanded" onClick={() => onClick(type)}>
      <div>
        <img src={imageSrc} alt={title} className="card-img" />
        <div className="card-title">{title}</div>
      </div>
      // TODO - Add options for order
      <div className="options">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
    </div>
  );
};

export default CardExpanded;
