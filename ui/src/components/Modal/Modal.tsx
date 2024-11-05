import React, { ReactNode } from 'react'
import './Modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export interface ModalTriggerProps {
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', paddingBottom: '1em' }}>
          <div style={{ fontSize: '1.5em' }}>{title}</div>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
