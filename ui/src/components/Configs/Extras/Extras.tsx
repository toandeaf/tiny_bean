import './Extras.css'
import addOns from '../../../assets/addons.png'
import AddOnsModal from './AddOns/AddOnsModal.tsx'
import note from '../../../assets/notepad.png'
import NoteModal from './Notes/NoteModal.tsx'
import ModalButton from '../../Buttons/ModalButton.tsx'
import { useOrderStore } from '../../../data/orderState.ts'

const Extras = () => {
  const { order } = useOrderStore()

  if (!order) return null

  return (
    <div className={'extras-container'}>
      <span>Extras</span>
      <div className={'extras-buttons'}>
        <ModalButton
          key={'Add-ons'}
          option={{ title: 'Add-ons', imageSrc: addOns, value: 'add-ons' }}
          modal={AddOnsModal}
          isSelected={order.extras.length > 0}
        />
        <ModalButton
          key={'Notes'}
          option={{ title: 'Notes', imageSrc: note, value: 'notes' }}
          modal={NoteModal}
          isSelected={order.notes.length > 0}
        />
      </div>
    </div>
  )
}

export default Extras
