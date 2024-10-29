import { FC } from 'react';
import { CardProps } from './Card.tsx';
import CardBanner from './CardBanner.tsx';
import './CardExpanded.css';
import Shots from '../Configs/Shots.tsx';
import Extras from '../Configs/Extras/Extras.tsx';
import ActionButtons from '../ActionButtons.tsx';
import { MILKS } from '../../data/addOnOptions.ts';
import AddOnSection from '../Configs/Extras/AddOns/AddOnSection.tsx';

const CardExpanded: FC<Omit<CardProps, 'onClick'>> = ({ option }) => (
  <div key={option.title} className="card-expanded">
    <div className={'card-expanded-content'}>
      <CardBanner title={option.title} imageSrc={option.imageSrc} />
      <Shots />
      <AddOnSection title={'Milk'} options={MILKS} />
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
