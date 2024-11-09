import { FC } from 'react'
import './Button.css'
import Button from './Button.tsx'

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
    <Button text={cancelText} action={cancelAction} primary={false} />
    <Button text={primaryText} action={primaryAction} primary={true} />
  </div>
)

export default ActionButtons
