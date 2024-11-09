import { FC, useMemo } from 'react'
import './CardBanner.css'
import Size from '../Configs/Size.tsx'
import { ORDER_MAP } from '../../data/orderOptions.ts'
import { Order } from '../../types/types.ts'

interface Props {
  order: Order
}

const CardBanner: FC<Props> = ({ order }) => {
  const option = useMemo(() => ORDER_MAP.get(order.type), [order])

  return (
    <div className={'card-banner'}>
      <div className={'card-banner-type'}>
        {option && (
          <>
            {option?.imageSrc && (
              <img
                src={option.imageSrc}
                alt={option.title}
                className="card-banner-img"
              />
            )}
            <div className="card-banner-title">{option?.title}</div>
          </>
        )}
      </div>
      <Size />
    </div>
  )
}

export default CardBanner
