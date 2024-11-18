import Card from 'components/Card/Card.tsx'
import { DRINK_TYPE_MAP } from '../../data/drinkOptions.ts'
import { DrinkType } from 'types/types.ts'
import { DEFAULT_DRINK, useOrderStore } from 'data/orderState.ts'

const DrinkTypes = () => {
  const { setDrink, orderDrinks } = useOrderStore()

  const handleCardClick = (orderType: DrinkType) => {
    setDrink({ ...DEFAULT_DRINK, type: orderType })
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.from(DRINK_TYPE_MAP.values()).map((option) => (
          <Card
            key={option.title}
            option={option}
            onClick={handleCardClick}
            counter={
              orderDrinks.filter((order) => order.type === option.value).length
            }
          />
        ))}
      </div>
    </div>
  )
}

export default DrinkTypes
