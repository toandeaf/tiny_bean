import './Extras.css'
import addOns from '/images/addons.png'
import AddOnsModal from './AddOns/AddOnsModal.tsx'
import note from '/images/notepad.png'
import NoteModal from './Notes/NoteModal.tsx'
import { useOrderStore } from '../../../data/orderState.ts'
import OptionModal from '../OptionModal.tsx'
import { useMemo } from 'react'

const Extras = () => {
  const { order } = useOrderStore()
  const isAddOnSelected = useMemo(() => !!order?.extras.length, [order?.extras])
  const isNoteSelected = useMemo(() => !!order?.notes.length, [order?.notes])

  if (!order) return null

  return (
    <div className={'extras-container'}>
      <span>Extras</span>
      <div className={'extras-buttons'}>
        <OptionModal
          key={'Add-ons'}
          option={{ title: 'Add-ons', imageSrc: addOns, value: 'add-ons' }}
          modal={AddOnsModal}
          isSelected={isAddOnSelected}
        />
        <OptionModal
          key={'Notes'}
          option={{ title: 'Notes', imageSrc: note, value: 'notes' }}
          modal={NoteModal}
          isSelected={isNoteSelected}
        />
      </div>
    </div>
  )
}

export default Extras
