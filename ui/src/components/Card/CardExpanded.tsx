import { FC } from 'react'
import CardBanner from './CardBanner.tsx'
import './CardExpanded.css'
import Extras from '../Configs/Extras/Extras.tsx'
import ActionButtons from '../ActionButtons.tsx'
import { MILKS, SHOTS } from '../../data/addOnOptions.ts'
import Selections from '../Configs/Extras/Selections/Selections.tsx'
import { useOrderStore } from '../../data/orderState.ts'

const CardExpanded: FC = () => {
  const { order, setOrder, setField, addOrder } = useOrderStore()

  if (!order) return null

  return (
    <div className="card-expanded">
      <div className={'card-expanded-content'}>
        <CardBanner order={order} />

        <Selections
          title={'Shots'}
          options={SHOTS}
          onClick={(val) => setField('numberOfShots', val)}
          selectedOptions={new Set([order.numberOfShots])}
        />
        <Selections
          title={'Milk'}
          options={MILKS}
          onClick={(val) => setField('milkType', val)}
          selectedOptions={new Set([order.milkType])}
        />
        <Extras />
      </div>

      <ActionButtons
        primaryText={'Add to order'}
        primaryAction={() => {
          addOrder(order)
          setOrder(null)
        }}
        cancelText={'Clear'}
        cancelAction={() => setOrder(null)}
      />
    </div>
  )
}

export default CardExpanded
