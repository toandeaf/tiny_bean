import Modal, { ModalTriggerProps } from '../../../Modal/Modal.tsx'
import { FC, useState } from 'react'
import Notes from './Notes.tsx'
import { useOrderStore } from '../../../../data/orderState.ts'
import ActionButtons from '../../../Buttons/ActionButtons.tsx'

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

      <div className={'modal-buttons'}>
        <ActionButtons
          primaryText={'Add note'}
          primaryAction={() => {
            setField('notes', note)
            setIsModalOpen(false)
          }}
          cancelText={'Clear'}
          cancelAction={() => {
            setNote('')
            setField('notes', '')
            setIsModalOpen(false)
          }}
        />
      </div>
    </Modal>
  )
}

export default NoteModal
