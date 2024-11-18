import { FC, useMemo } from 'react'
import './SelectionCardBanner.css'
import Size from 'components/Options/Standards/Size/Size.tsx'
import { DRINK_TYPE_MAP } from '../../data/drinkOptions.ts'
import { Drink } from 'types/types.ts'

interface Props {
  drink: Drink
}

const SelectionCardBanner: FC<Props> = ({ drink }) => {
  const option = useMemo(() => DRINK_TYPE_MAP.get(drink.type), [drink])

  return (
    <div className={'card-banner'}>
      <div className={'card-banner-type'}>
        {option && (
          <>
            {option?.imageSrc && (
              <img
                src={option.imageSrc}
                alt={option.title}
                className="card-banner-img"
              />
            )}
            <div className="card-banner-title">{option?.title}</div>
          </>
        )}
      </div>
      <Size />
    </div>
  )
}

export default SelectionCardBanner
