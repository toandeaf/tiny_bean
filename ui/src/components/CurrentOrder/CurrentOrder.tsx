import { useOrderStore } from '../../data/orderState.ts'
import './CurrentOrder.css'
import { ORDER_MAP } from '../../data/orderOptions.ts'

const CurrentOrder = () => {
  const { currentOrder } = useOrderStore()
  return (
    <div className={'overall-order-container'}>
      {currentOrder.map((order, index) => {
        return (
          <div className={'overall-order-entry'} key={order.type + ' ' + index}>
            <img
              className={'overall-order-image'}
              src={ORDER_MAP.get(order.type)?.imageSrc}
              alt={order.type}
            />
            <div className={'overall-order-type'}>{order.type}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CurrentOrder
