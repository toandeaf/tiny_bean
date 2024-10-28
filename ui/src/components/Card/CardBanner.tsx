import { FC } from 'react';
import './CardBanner.css';
import Size from '../Configs/Size.tsx';

interface Props {
  title: string;
  imageSrc: string;
}

const CardBanner: FC<Props> = ({ title, imageSrc }) => {
  return (
    <div className={'card-banner'}>
      <div className={'card-banner-type'}>
        <img src={imageSrc} alt={title} className="card-banner-img" />
        <div className="card-banner-title">{title}</div>
      </div>
      <Size />
    </div>
  );
};

export default CardBanner;
