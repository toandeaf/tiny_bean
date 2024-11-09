import './Card.css'
import { Option } from '../../types/types.ts'

export interface CardProps<T> {
  option: Option<T>
  onClick: (type: T) => void
}

const Card = <T,>({ option, onClick }: CardProps<T>) => (
  <div
    key={option.title}
    className="card"
    onClick={() => onClick(option.value)}
  >
    <img src={option.imageSrc} alt={option.title} className="card-img" />
    <div className="card-title">{option.title}</div>
  </div>
)

export default Card
