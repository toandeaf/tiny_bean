import './Extras.css'
import ExtraButton from './ExtraButton.tsx'
import { Option } from '../../../types/types.ts'
import { FC } from 'react'
import { ModalTriggerProps } from '../../Modal/Modal.tsx'
import { EXTRAS } from '../../../data/extraOptions.ts'

export interface OptionWithModal extends Option {
  modal: FC<ModalTriggerProps>
}

const Extras = () => {
  return (
    <div className={'extras-container'}>
      <span>Extras</span>
      <div className={'extras-buttons'}>
        {EXTRAS.map((extra) => (
          <ExtraButton key={extra.title} option={extra} modal={extra.modal} />
        ))}
      </div>
    </div>
  )
}

export default Extras
