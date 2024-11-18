import { useOrderStore } from 'data/orderState.ts'
import './CurrentOrder.css'
import { DRINK_TYPE_MAP } from '../../data/drinkOptions.ts'

const CurrentOrder = () => {
  const { orderDrinks } = useOrderStore()
  return (
    <div className={'overall-order-container'}>
      {orderDrinks.map((order, index) => {
        return (
          <div className={'overall-order-entry'} key={order.type + ' ' + index}>
            <img
              className={'overall-order-image'}
              src={DRINK_TYPE_MAP.get(order.type)?.imageSrc}
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
