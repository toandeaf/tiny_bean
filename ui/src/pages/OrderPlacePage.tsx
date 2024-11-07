import './OrderPlacePage.css'
import Banner from '../components/Banner.tsx'
import { ORDER_MAP } from '../data/orderOptions.ts'
import { OrderOption } from '../types/types.ts'
import '../components/Card/Card.css'
import Card from '../components/Card/Card.tsx'
import CardExpanded from '../components/Card/CardExpanded.tsx'
import { DEFAULT_ORDER, useOrderStore } from '../data/orderState.ts'


const OrderPlacePage = () => {
  const { order, setOrder } = useOrderStore()

  const handleCardClick = (orderOption: OrderOption) => {
    setOrder({ ...DEFAULT_ORDER, type: orderOption.type })
  }

  return (
    <>
      <Banner />
      <div className="card-container">
        {order ? (
          <CardExpanded
            key={order.type}
            order={order}
          />
        ) : (
          Array.from(ORDER_MAP.values()).map((option) => (
            <Card
              key={option.type}
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
