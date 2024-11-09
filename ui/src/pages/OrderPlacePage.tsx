import './OrderPlacePage.css'
import Banner from '../components/Banner.tsx'
import { ORDER_MAP } from '../data/orderOptions.ts'
import { OrderType } from '../types/types.ts'
import '../components/Card/Card.css'
import Card from '../components/Card/Card.tsx'
import CardExpanded from '../components/Card/CardExpanded.tsx'
import { DEFAULT_ORDER, useOrderStore } from '../data/orderState.ts'

const OrderPlacePage = () => {
  const { order, setOrder } = useOrderStore()

  const handleCardClick = (orderType: OrderType) => {
    setOrder({ ...DEFAULT_ORDER, type: orderType })
  }

  return (
    <>
      <Banner />
      <div className="card-container">
        {order ? (
          <CardExpanded />
        ) : (
          Array.from(ORDER_MAP.values()).map((option) => (
            <Card
              key={option.title}
              option={option}
              onClick={handleCardClick}
            />
          ))
        )}
      </div>
    </>
  )
}

export default OrderPlacePage
