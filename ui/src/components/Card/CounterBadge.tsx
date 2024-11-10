import { FC } from 'react'
import './Card.css'

interface Props {
  counter: number
}

const CounterBadge: FC<Props> = ({ counter }) => {
  return <div className={'badge'}>{counter}</div>
}

export default CounterBadge
