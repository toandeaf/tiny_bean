import { FC, useEffect, useState } from 'react';
import './Selections.css';
import { Option } from '../../../../types/types.ts';

interface Props {
  option: Option;
  selected: Set<string>;
  handleSelection: (isSelected: boolean, title: string) => void;
}

const SelectionOption: FC<Props> = ({ option, selected, handleSelection }) => {
  const { imageSrc, title } = option;
  const [isSelected, setIsSelected] = useState(() => selected.has(title));

  useEffect(() => {
    setIsSelected(selected.has(title));
  }, [selected, title]);

  return (
    <button
      className={`add-on-option ${isSelected ? 'selected' : ''}`}
      onClick={() => handleSelection(!isSelected, title)}
    >
      {imageSrc && (
        <img src={imageSrc} className={'add-on-option-image'} alt={title} />
      )}
      <span>{title}</span>
    </button>
  );
};

export default SelectionOption;
