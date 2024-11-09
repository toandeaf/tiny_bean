import { FC, useState } from 'react'
import { ModalTriggerProps } from '../Modal/Modal.tsx'
import '../Buttons/Button.css'
import Button from './Button.tsx'

interface Props {
  title: string
  modal: FC<ModalTriggerProps>
  primary: boolean
}

const ModalButton: FC<Props> = ({ title, modal, primary }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        text={title}
        action={() => setIsModalOpen(true)}
        primary={primary}
      />
      {modal({ isModalOpen, setIsModalOpen })}
    </>
  )
}

export default ModalButton
