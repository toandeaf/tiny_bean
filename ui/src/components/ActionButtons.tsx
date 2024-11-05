import { FC } from 'react'

export interface ActionButtonProps {
  primaryText: string
  cancelText: string
  primaryAction: () => void
  cancelAction: () => void
}

const ActionButtons: FC<ActionButtonProps> = ({
  primaryText,
  primaryAction,
  cancelText,
  cancelAction,
}) => (
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
)

export default ActionButtons
