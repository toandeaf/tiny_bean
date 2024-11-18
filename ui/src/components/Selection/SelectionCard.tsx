import { FC } from 'react'
import { useOrderStore } from 'data/orderState.ts'
import Selections from './Selections.tsx'
import Extras from 'components/Options/Extras/Extras.tsx'
import { MILKS, SHOTS } from 'data/addOnOptions.ts'
import './SelectionCard.css'
import ActionButtons from 'components/Buttons/ActionButtons.tsx'
import SelectionCardBanner from './SelectionCardBanner.tsx'

const SelectionCard: FC = () => {
  const { currentDrink, setDrink, setField, addDrink } = useOrderStore()

  if (!currentDrink) return null

  return (
    <div className="selection-card">
      <div className={'selection-card-content'}>
        <SelectionCardBanner drink={currentDrink} />

        <Selections
          title={'Shots'}
          options={SHOTS}
          onClick={(val) => setField('numberOfShots', val)}
          selectedOptions={new Set([currentDrink.numberOfShots])}
        />
        <Selections
          title={'Milk'}
          options={MILKS}
          onClick={(val) => setField('milkType', val)}
          selectedOptions={new Set([currentDrink.milkType])}
        />
        <Extras />
      </div>

      <ActionButtons
        primaryText={'Add to order'}
        primaryAction={() => {
          addDrink({ ...currentDrink })
          setDrink(null)
        }}
        cancelText={'Clear'}
        cancelAction={() => setDrink(null)}
      />
    </div>
  )
}

export default SelectionCard
