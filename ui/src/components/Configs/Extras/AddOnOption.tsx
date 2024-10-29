import { FC } from 'react';

interface Props {
  title: string;
  imageSrc: string;
}

const AddOnOption: FC<Props> = ({ title, imageSrc }) => {
  return (
    <button
      className={'extra-button'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={imageSrc}
        style={{ height: '2.5em', width: '2.5em' }}
        alt={title}
      />
      <span>{title}</span>
    </button>
  );
};

export default AddOnOption;
