import './OrderPlacePage.css'
import Banner from '../../components/Banner.tsx'
import { useOrderStore } from '../../data/orderState.ts'
import SelectionCard from '../../components/Selection/SelectionCard.tsx'
import OrderOptionTypes from '../../components/OrderOptionTypes/OrderOptionTypes.tsx'
import ActionButtons from '../../components/Buttons/ActionButtons.tsx'

const OrderPlacePage = () => {
  const { order, clearOrders } = useOrderStore()

  return (
    <>
      <Banner />
      <div className={'order-container'}>
        {order ? (
          <SelectionCard />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <OrderOptionTypes />
            <ActionButtons
              primaryText={'Finalize'}
              cancelText={'Clear'}
              primaryAction={() => {}}
              cancelAction={clearOrders}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default OrderPlacePage
