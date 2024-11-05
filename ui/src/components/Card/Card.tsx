import { FC } from 'react'
import './Card.css'
import { OrderOption } from '../../types/types.ts'

export interface CardProps {
  option: OrderOption
  onClick: (type: OrderOption) => void
}

const Card: FC<CardProps> = ({ option, onClick }) => (
  <div key={option.title} className="card" onClick={() => onClick(option)}>
    <img src={option.imageSrc} alt={option.title} className="card-img" />
    <div className="card-title">{option.title}</div>
  </div>
)

export default Card
