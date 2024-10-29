import { FC } from 'react';
import { CardProps } from './Card.tsx';
import CardBanner from './CardBanner.tsx';
import './CardExpanded.css';
import Shots from '../Configs/Shots.tsx';
import Extras from '../Configs/Extras/Extras.tsx';
import ActionButtons from '../ActionButtons.tsx';
import MilkTypes from '../Configs/MilkTypes.tsx';

const CardExpanded: FC<Omit<CardProps, 'onClick'>> = ({ option }) => (
  <div key={option.title} className="card-expanded">
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7em' }}>
      <CardBanner title={option.title} imageSrc={option.imageSrc} />

      <Shots />
      <MilkTypes />
      <Extras />
    </div>
    <ActionButtons
      primaryText={'Add order'}
      primaryAction={() => {}}
      cancelText={'Cancel order'}
      cancelAction={() => {}}
    />
  </div>
);

export default CardExpanded;
