import ActionButtons from 'components/Buttons/ActionButtons.tsx'
import Modal, { ModalTriggerProps } from 'components/Modal/Modal.tsx'
import { FC } from 'react'
import CurrentOrder from './CurrentOrder.tsx'

const CurrentOrderModal: FC<ModalTriggerProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
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
            // TODO dispatch order to server
            setIsModalOpen(false)
          }}
          cancelText={'Back'}
          cancelAction={() => {
            // clearOrders()
            setIsModalOpen(false)
          }}
        />
      </div>
    </Modal>
  )
}

export default CurrentOrderModal
