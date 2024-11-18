import './OrderPlacePage.css'
import Banner from 'components/Banner/Banner.tsx'
import { useOrderStore } from 'data/orderState.ts'
import SelectionCard from 'components/Selection/SelectionCard.tsx'
import DrinkTypes from '../../components/Options/DrinkTypes.tsx'
import ActionButtons from 'components/Buttons/ActionButtons.tsx'
import ModalButton from 'components/Buttons/ModalButton.tsx'
import CurrentOrderModal from 'components/CurrentOrder/CurrentOrderModal.tsx'
import { useEffect } from 'react'
import apiClient from 'api/client.ts'

const OrderPlacePage = () => {
  const { currentDrink, clearDrinks, orderDrinks } = useOrderStore()

  useEffect(() => {
    apiClient.get('/test').then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <Banner />
      <div className={'order-container'}>
        {currentDrink ? (
          <SelectionCard />
        ) : (
          <div className={'order-types-container'}>
            <DrinkTypes />
            {!!orderDrinks.length && (
              <ActionButtons
                cancelText={'Clear'}
                cancelAction={clearDrinks}
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
