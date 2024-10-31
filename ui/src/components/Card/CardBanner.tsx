import { FC } from 'react';
import './CardBanner.css';
import Size from '../Configs/Size.tsx';
import { Option } from '../../types/types.ts';

interface Props {
  option: Option;
}

const CardBanner: FC<Props> = ({ option }) => (
  <div className={'card-banner'}>
    <div className={'card-banner-type'}>
      {option.imageSrc && (
        <img
          src={option.imageSrc}
          alt={option.title}
          className="card-banner-img"
        />
      )}
      <div className="card-banner-title">{option.title}</div>
    </div>
    <Size />
  </div>
);

export default CardBanner;
