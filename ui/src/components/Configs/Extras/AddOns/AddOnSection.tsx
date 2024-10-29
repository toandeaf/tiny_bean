import AddOnOption from './AddOnOption.tsx';
import './AddOns.css';
import { Option } from '../../../../types/types.ts';
import { FC } from 'react';

interface Props {
  title: string;
  options: Array<Option>;
}

const AddOnSection: FC<Props> = ({ title, options }) => {
  return (
    <div className={'add-on-section'}>
      <div>{title}</div>
      <div className={'add-on-section-options'}>
        {options.map((option) => (
          <AddOnOption
            key={option.title}
            title={option.title}
            imageSrc={option.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOnSection;
