import { FC } from 'react';
import './CardBanner.css';

interface Props {
  title: string;
  imageSrc: string;
}

const CardBanner: FC<Props> = ({ title, imageSrc }) => {
  return (
    <div className={'card-banner'}>
      <img src={imageSrc} alt={title} className="card-banner-img" />
      <div className="card-banner-title">{title}</div>
    </div>
  );
};

export default CardBanner;
