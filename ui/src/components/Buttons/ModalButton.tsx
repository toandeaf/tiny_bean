import { FC, useState } from 'react'
import { Option } from '../../types/types.ts'
import { ModalTriggerProps } from '../Modal/Modal.tsx'

interface Props<T> {
  option: Option<T>
  modal: FC<ModalTriggerProps>
  isSelected: boolean
}

const ModalButton = <T,>({ option, modal, isSelected }: Props<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        className={`modal-button ${isSelected ? 'selected' : ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={'modal-button-elements'}>
          <img
            className={'modal-button-image'}
            src={option.imageSrc}
            alt={option.title}
          />
          <div>{option.title}</div>
        </div>
      </button>
      {modal({ isModalOpen, setIsModalOpen })}
    </>
  )
}

export default ModalButton
