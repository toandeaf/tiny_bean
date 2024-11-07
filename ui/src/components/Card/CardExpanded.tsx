import { FC } from 'react'
import CardBanner from './CardBanner.tsx'
import './CardExpanded.css'
import Extras from '../Configs/Extras/Extras.tsx'
import ActionButtons from '../ActionButtons.tsx'
import { MILKS, SHOTS } from '../../data/addOnOptions.ts'
import Selections from '../Configs/Extras/Selections/Selections.tsx'
import { Order } from '../../types/types.ts'

interface Props {
  order: Order
}

const CardExpanded: FC<Props> = ({ order }) => (
  <div key={order.type} className="card-expanded">
    <div className={'card-expanded-content'}>
      <CardBanner order={order} />
      <Selections title={'Shots'} options={SHOTS} isMultiSelect={false} />
      <Selections title={'Milk'} options={MILKS} isMultiSelect={false} />
      <Extras />
    </div>

    <ActionButtons
      primaryText={'Add order'}
      primaryAction={() => {}}
      cancelText={'Cancel order'}
      cancelAction={() => {}}
    />
  </div>
)

export default CardExpanded
