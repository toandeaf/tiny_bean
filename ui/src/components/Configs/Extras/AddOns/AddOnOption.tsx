import { FC } from 'react';
import './AddOns.css';

interface Props {
  title: string;
  imageSrc: string;
}

const AddOnOption: FC<Props> = ({ title, imageSrc }) => {
  return (
    <button className={'add-on-option'}>
      <img src={imageSrc} className={'add-on-option-image'} alt={title} />
      <span>{title}</span>
    </button>
  );
};

export default AddOnOption;
