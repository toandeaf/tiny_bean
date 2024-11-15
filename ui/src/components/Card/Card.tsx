import './Card.css'
import { Option } from 'types/types.ts'
import CounterBadge from './CounterBadge.tsx'

export interface CardProps<T> {
  option: Option<T>
  onClick: (type: T) => void
  counter: number
}

const Card = <T,>({ option, onClick, counter }: CardProps<T>) => (
  <div
    key={option.title}
    className="card"
    onClick={() => onClick(option.value)}
  >
    <img src={option.imageSrc} alt={option.title} className="card-img" />
    <div className="card-title">{option.title}</div>
    {counter > 0 && <CounterBadge counter={counter} />}
  </div>
)

export default Card
