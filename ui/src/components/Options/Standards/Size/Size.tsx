import { useState } from 'react'
import takeway_s from '/images/takeway_s.png'
import takeway_m from '/images/takeway_m.png'
import takeway_l from '/images/takeway_l.png'

import { Size as OrderSize } from '../../../../types/types.ts'
import './Size.css'

type SizeBars = {
  size: OrderSize
  imageSrc?: string
}

const SIZES: SizeBars[] = [
  { size: OrderSize.SMALL, imageSrc: takeway_s },
  { size: OrderSize.MEDIUM, imageSrc: takeway_m },
  { size: OrderSize.LARGE, imageSrc: takeway_l },
]

const Size = () => {
  const [selected, setSelected] = useState<OrderSize>(OrderSize.MEDIUM)

  return (
    <div className={'size-container'}>
      {SIZES.map((size) => {
        return (
          <button
            key={size.size}
            className={`size-button ${selected === size.size ? 'selected' : ''}`}
            onClick={() => setSelected(size.size)}
          >
            <img
              src={size.imageSrc}
              alt="size"
              style={{ height: '2em', width: '2em' }}
            />
          </button>
        )
      })}
    </div>
  )
}

export default Size
