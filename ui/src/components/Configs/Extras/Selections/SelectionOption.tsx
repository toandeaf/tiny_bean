import './Selections.css'
import { Option } from '../../../../types/types.ts'

interface Props<T> {
  option: Option<T>
  onClick: (value: T) => void
  selectedValues: Set<T>
}

const SelectionOption = <T,>({ option, onClick, selectedValues }: Props<T>) => {
  const { imageSrc, title, value } = option

  return (
    <button
      className={`add-on-option ${selectedValues.has(value) ? 'selected' : ''}`}
      onClick={() => onClick(value)}
    >
      {imageSrc && (
        <img src={imageSrc} className={'add-on-option-image'} alt={title} />
      )}
      <span>{title}</span>
    </button>
  )
}

export default SelectionOption
