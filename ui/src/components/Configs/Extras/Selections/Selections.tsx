import SelectionOption from './SelectionOption.tsx'
import './Selections.css'
import { Option } from '../../../../types/types.ts'
import { FC, useState } from 'react'

interface Props {
  title: string
  options: Array<Option>
  isMultiSelect: boolean
}

const Selections: FC<Props> = ({ title, options, isMultiSelect }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const handleSingleSelection = (isSelected: boolean, value: string) => {
    const newSet = new Set<string>()
    if (isSelected) {
      newSet.add(value)
    }
    setSelected(newSet)
  }

  const handleMultiSelection = (isSelected: boolean, value: string) => {
    const newSet = new Set(selected)

    if (isSelected) {
      newSet.add(value)
    } else {
      newSet.delete(value)
    }

    setSelected(newSet)
  }

  return (
    <div className={'add-on-section'}>
      <div>{title}</div>
      <div className={'add-on-section-options'}>
        {options.map((option) => (
          <SelectionOption
            key={option.title}
            option={option}
            selected={selected}
            handleSelection={
              isMultiSelect ? handleMultiSelection : handleSingleSelection
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Selections
