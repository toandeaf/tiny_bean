import { FC, useState } from 'react'
import { Option } from 'types/types.ts'
import { ModalTriggerProps } from 'components/Modal/Modal.tsx'
import 'components/Buttons/Button.css'

interface Props<T> {
  option: Option<T>
  modal: FC<ModalTriggerProps>
  isSelected: boolean
}

const OptionModal = <T,>({ option, modal, isSelected }: Props<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        className={`modal-button ${isSelected ? 'selected' : ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={'modal-button-elements'}>
          {option.imageSrc && (
            <img
              className={'modal-button-image'}
              src={option.imageSrc}
              alt={option.title}
            />
          )}

          <div>{option.title}</div>
        </div>
      </button>
      {modal({ isModalOpen, setIsModalOpen })}
    </>
  )
}

export default OptionModal
