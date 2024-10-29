import { FC } from 'react';

interface Props {
  primaryText: string;
  cancelText: string;
  primaryAction: () => void;
  cancelAction: () => void;
}

const ActionButtons: FC<Props> = ({
  primaryText,
  primaryAction,
  cancelText,
  cancelAction,
}) => {
  return (
    <div style={{ display: 'flex', marginBottom: '1em' }}>
      <button
        className={`button button-negative button-shadow`}
        onClick={cancelAction}
      >
        {cancelText}
      </button>
      <button
        className={`button button-primary button-shadow`}
        onClick={primaryAction}
      >
        {primaryText}
      </button>
    </div>
  );
};

export default ActionButtons;
