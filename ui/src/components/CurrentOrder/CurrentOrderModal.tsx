import ActionButtons from '../Buttons/ActionButtons.tsx'
import Modal, { ModalTriggerProps } from '../Modal/Modal.tsx'
import { FC } from 'react'
import { useOrderStore } from '../../data/orderState.ts'
import CurrentOrder from './CurrentOrder.tsx'

const CurrentOrderModal: FC<ModalTriggerProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { clearOrders } = useOrderStore()

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={'Current Order'}
    >
      <CurrentOrder />

      <div className={'modal-buttons'}>
        <ActionButtons
          primaryText={'Dispatch order'}
          primaryAction={() => {
            // setField('notes', note)
            // TODO dispatch order to server
            setIsModalOpen(false)
          }}
          cancelText={'Back'}
          cancelAction={() => {
            clearOrders()
            setIsModalOpen(false)
          }}
        />
      </div>
    </Modal>
  )
}

export default CurrentOrderModal
