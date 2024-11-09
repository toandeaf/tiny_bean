import { FC } from 'react'

interface Props {
  text: string
  action: () => void
  primary: boolean
}

const Button: FC<Props> = ({ text, action, primary }) => {
  return (
    <button
      className={`button button-${primary ? 'primary' : 'negative'} button-shadow`}
      onClick={action}
    >
      {text}
    </button>
  )
}

export default Button
