import './Extras.css'
import addOns from '/images/addons.png'
import AddOnsModal from './AddOns/AddOnsModal.tsx'
import note from '/images/notepad.png'
import NoteModal from './Notes/NoteModal.tsx'
import { useOrderStore } from 'data/orderState.ts'
import OptionModal from 'components/Options/OptionModal.tsx'
import { useMemo } from 'react'

const Extras = () => {
  const { currentDrink } = useOrderStore()
  const isAddOnSelected = useMemo(
    () => !!currentDrink?.extras.length,
    [currentDrink?.extras]
  )
  const isNoteSelected = useMemo(
    () => !!currentDrink?.notes.length,
    [currentDrink?.notes]
  )

  if (!currentDrink) return null

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
