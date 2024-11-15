import AddOnOption from '../Options/Extras/AddOns/AddOnOption.tsx'
import './Selections.css'
import { Option } from 'types/types.ts'
import { useEffect, useState } from 'react'

interface Props<T> {
  title: string
  options: Array<Option<T>>
  selectedOptions: Set<T>
  onClick: (value: T) => void
}

const Selections = <T,>({
  title,
  options,
  selectedOptions,
  onClick,
}: Props<T>) => {
  const [selectedValues, setSelectedValues] = useState<Set<T>>(selectedOptions)

  useEffect(() => {
    setSelectedValues(selectedOptions)
  }, [selectedOptions])

  return (
    <div className={'add-on-section'}>
      <div>{title}</div>
      <div className={'add-on-section-options'}>
        {options.map((option) => (
          <AddOnOption
            key={option.title}
            option={option}
            onClick={onClick}
            selectedValues={selectedValues}
          />
        ))}
      </div>
    </div>
  )
}

export default Selections
