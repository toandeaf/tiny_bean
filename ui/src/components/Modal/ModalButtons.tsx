import ActionButtons, { ActionButtonProps } from '../ActionButtons.tsx';
import { FC } from 'react';
import './Modal.css';

const ModalButtons: FC<ActionButtonProps> = ({
  primaryText,
  primaryAction,
  cancelText,
  cancelAction,
}) => (
  <div className={'modal-buttons'}>
    <ActionButtons
      primaryText={primaryText}
      primaryAction={primaryAction}
      cancelText={cancelText}
      cancelAction={cancelAction}
    />
  </div>
);

export default ModalButtons;
