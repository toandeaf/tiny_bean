import { FC } from 'react'
import { useOrderStore } from '../../data/orderState.ts'
import Selections from '../Configs/Extras/Selections/Selections.tsx'
import Extras from '../Configs/Extras/Extras.tsx'
import { MILKS, SHOTS } from '../../data/addOnOptions.ts'
import './SelectionCard.css'
import ActionButtons from '../ActionButtons.tsx'
import SelectionCardBanner from './SelectionCardBanner.tsx'

const SelectionCard: FC = () => {
  const { order, setOrder, setField, addOrder } = useOrderStore()

  if (!order) return null

  return (
    <div className="selection-card">
      <div className={'selection-card-content'}>
        <SelectionCardBanner order={order} />

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

export default SelectionCard
