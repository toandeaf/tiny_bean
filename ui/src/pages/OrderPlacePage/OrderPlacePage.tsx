import './OrderPlacePage.css'
import Banner from '../../components/Banner/Banner.tsx'
import { useOrderStore } from '../../data/orderState.ts'
import SelectionCard from '../../components/Selection/SelectionCard.tsx'
import OrderTypes from '../../components/Options/OrderTypes.tsx'
import ActionButtons from '../../components/Buttons/ActionButtons.tsx'
import ModalButton from '../../components/Buttons/ModalButton.tsx'
import CurrentOrderModal from '../../components/CurrentOrder/CurrentOrderModal.tsx'

const OrderPlacePage = () => {
  const { order, clearOrders, currentOrder } = useOrderStore()

  return (
    <>
      <Banner />
      <div className={'order-container'}>
        {order ? (
          <SelectionCard />
        ) : (
          <div className={'order-types-container'}>
            <OrderTypes />
            {!!currentOrder.length && (
              <ActionButtons
                cancelText={'Clear'}
                cancelAction={clearOrders}
                primaryOverride={
                  <ModalButton
                    primary={true}
                    title={'Finalize'}
                    modal={CurrentOrderModal}
                  />
                }
              />
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default OrderPlacePage
