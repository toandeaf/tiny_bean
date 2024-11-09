import Modal, { ModalTriggerProps } from '../../../Modal/Modal.tsx'
import { FC, useState } from 'react'
import Notes from './Notes.tsx'
import ModalActionButtons from '../../../Modal/ModalActionButtons.tsx'
import { useOrderStore } from '../../../../data/orderState.ts'

const NoteModal: FC<ModalTriggerProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [note, setNote] = useState('')
  const { setField } = useOrderStore()

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={'Add note'}
    >
      <Notes note={note} setNote={setNote} />
      <ModalActionButtons
        primaryText={'Add note'}
        primaryAction={() => {
          setField('notes', note)
          setIsModalOpen(false)
        }}
        cancelText={'Clear'}
        cancelAction={() => {
          setNote('')
          setIsModalOpen(false)
        }}
      />
    </Modal>
  )
}

export default NoteModal
