import { FC } from 'react'
import './CardBanner.css'
import Size from '../Configs/Size.tsx'
import { Order } from '../../types/types.ts'
import { ORDER_MAP } from '../../data/orderOptions.ts'

interface Props {
  order: Order
}

const CardBanner: FC<Props> = ({ order }) => {
  const option = ORDER_MAP.get(order.type)

  if (!option) {
    return null
  }

  return (
    <div className={'card-banner'}>
      <div className={'card-banner-type'}>
        {option.imageSrc && (
          <img
            src={option.imageSrc}
            alt={option.title}
            className="card-banner-img"
          />
        )}
        <div className="card-banner-title">{option.title}</div>
      </div>
      <Size />
    </div>
  )
}

export default CardBanner
