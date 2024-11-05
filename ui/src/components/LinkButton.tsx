import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string
  href?: string
  primary?: boolean
}

const LinkButton: FC<Props> = ({ primary, text, href }) => (
  <Link
    to={href || '/'}
    className={`button button-${primary ? 'primary' : 'secondary'} button-shadow`}
  >
    {text}
  </Link>
)

export default LinkButton
