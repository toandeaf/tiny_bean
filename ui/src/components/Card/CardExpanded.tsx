import { FC } from 'react';
import { CardProps } from './Card.tsx';
import CardBanner from './CardBanner.tsx';
import './CardExpanded.css';
import Extras from '../Configs/Extras/Extras.tsx';
import ActionButtons from '../ActionButtons.tsx';
import { MILKS, SHOTS } from '../../data/addOnOptions.ts';
import Selections from '../Configs/Extras/Selections/Selections.tsx';

const CardExpanded: FC<Omit<CardProps, 'onClick'>> = ({ option }) => (
  <div key={option.title} className="card-expanded">
    <div className={'card-expanded-content'}>
      <CardBanner option={option} />
      <Selections title={'Shots'} options={SHOTS} isMultiSelect={false} />
      <Selections title={'Milk'} options={MILKS} isMultiSelect={false} />
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
