import './OrderPlacePage.css'
import Banner from '../components/Banner.tsx'
import { useOrderStore } from '../data/orderState.ts'
import SelectionCard from '../components/SelectionCard/SelectionCard.tsx'
import OrderOptionTypes from '../components/OrderOptionTypes/OrderOptionTypes.tsx'
import OverallOrder from '../components/OverallOrder/OverallOrder.tsx'

const OrderPlacePage = () => {
  const { order } = useOrderStore()

  return (
    <>
      <Banner />
      <div className={'order-container'}>
        {order ? (
          <SelectionCard />
        ) : (
          <div>
            <OrderOptionTypes />
            <OverallOrder />
          </div>
        )}
      </div>
    </>
  )
}

export default OrderPlacePage
