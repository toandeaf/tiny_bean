import './Notes.css'
import { FC } from 'react'

interface Props {
  note: string
  setNote: (value: string) => void
}

const Notes: FC<Props> = ({ note, setNote }) => {
  return (
    <textarea
      className={'notes-area'}
      rows={5}
      onChange={(e) => setNote(e.target.value)}
      defaultValue={note}
    ></textarea>
  )
}

export default Notes
