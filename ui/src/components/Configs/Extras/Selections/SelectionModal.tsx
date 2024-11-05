import Modal from '../../../Modal/Modal.tsx'
import { FC } from 'react'
import { EXTRAS, SYRUPS } from '../../../../data/addOnOptions.ts'
import Selections from './Selections.tsx'
import ModalButtons from '../../../Modal/ModalButtons.tsx'

interface Props {
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
}

const SelectionModal: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={'Add-ons'}
    >
      <Selections title={'Syrups'} options={SYRUPS} isMultiSelect={true} />
      <Selections title={'Extras'} options={EXTRAS} isMultiSelect={true} />

      <ModalButtons
        primaryText={'Confirm add-ons'}
        primaryAction={() => {}}
        cancelText={'Clear'}
        cancelAction={() => {}}
      />
    </Modal>
  )
}

export default SelectionModal
