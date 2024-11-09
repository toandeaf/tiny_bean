import { FC, ReactNode } from 'react'
import './Button.css'
import Button from './Button.tsx'

export interface ActionButtonProps {
  primaryText: string
  cancelText: string
  primaryAction: () => void
  cancelAction: () => void
  primaryOverride?: ReactNode
  cancelOverride?: ReactNode
}

const ActionButtons: FC<ActionButtonProps> = ({
  primaryText,
  primaryAction,
  cancelText,
  cancelAction,
  primaryOverride,
  cancelOverride,
}) => (
  <div style={{ display: 'flex', marginBottom: '1em' }}>
    {cancelOverride ?? (
      <Button text={cancelText} action={cancelAction} primary={false} />
    )}
    {primaryOverride ?? (
      <Button text={primaryText} action={primaryAction} primary={true} />
    )}
  </div>
)

export default ActionButtons
