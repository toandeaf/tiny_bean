import Modal from '../../../Modal/Modal.tsx'
import { MISCELLANEOUS, SYRUPS } from '../../../../data/addOnOptions.ts'
import Selections from '../../../Selection/Selections.tsx'
import { useOrderStore } from '../../../../data/orderState.ts'
import { useEffect, useState } from 'react'
import ActionButtons from '../../../Buttons/ActionButtons.tsx'

interface Props {
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
}

const AddOnsModal = ({ isModalOpen, setIsModalOpen }: Props) => {
  const { order, setField } = useOrderStore()
  const [selectedExtras, setSelectedExtras] = useState<Set<string>>(
    new Set(order?.extras)
  )

  useEffect(() => {
    setSelectedExtras(new Set(order?.extras))
  }, [order?.extras])

  if (!order) return null

  const handleExtras = (extra: string) => {
    if (order.extras.includes(extra)) {
      setField(
        'extras',
        order.extras.filter((e) => e !== extra)
      )
    } else {
      setField('extras', [...order.extras, extra])
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={'Add-ons'}
    >
      <Selections
        title={'Syrups'}
        options={SYRUPS}
        onClick={handleExtras}
        selectedOptions={selectedExtras}
      />
      <Selections
        title={'Miscellaneous'}
        options={MISCELLANEOUS}
        onClick={handleExtras}
        selectedOptions={selectedExtras}
      />

      <div className={'modal-buttons'}>
        <ActionButtons
          primaryText={'Ok'}
          primaryAction={() => {
            setIsModalOpen(false)
          }}
          cancelText={'Clear'}
          cancelAction={() => {
            setField('extras', [])
          }}
        />
      </div>
    </Modal>
  )
}

export default AddOnsModal
