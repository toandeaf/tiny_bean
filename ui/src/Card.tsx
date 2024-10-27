import { FC } from 'react';
import './Card.css';
import { OrderType } from './types.ts';

export interface CardProps {
  imageSrc: string;
  title: string;
  type: OrderType;
  onClick: (type: OrderType) => void;
}

const Card: FC<CardProps> = ({ imageSrc, title, type, onClick }) => (
  <div key={title} className="card" onClick={() => onClick(type)}>
    <img src={imageSrc} alt={title} className="card-img" />
    <div className="card-title">{title}</div>
  </div>
);

export default Card;
