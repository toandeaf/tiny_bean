import Card from '../Card/Card.tsx'
import { ORDER_MAP } from '../../data/orderOptions.ts'
import { OrderType } from '../../types/types.ts'
import { DEFAULT_ORDER, useOrderStore } from '../../data/orderState.ts'

const OrderOptionTypes = () => {
  const { setOrder } = useOrderStore()

  const handleCardClick = (orderType: OrderType) => {
    setOrder({ ...DEFAULT_ORDER, type: orderType })
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.from(ORDER_MAP.values()).map((option) => (
          <Card key={option.title} option={option} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default OrderOptionTypes