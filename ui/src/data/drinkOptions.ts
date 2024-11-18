import americano from '/images/americano.png'
import espresso from '/images/espresso.png'
import cappucino from '/images/cappucino.png'
import lattee from '/images/latte.png'
import icedlatte from '/images/icedlatte.png'
import matcha from '/images/matcha.png'
import { DrinkType, Option } from 'types/types.ts'

export const DRINK_TYPE_MAP: Map<DrinkType, Option<DrinkType>> = new Map([
  [
    DrinkType.AMERICANO,
    {
      imageSrc: americano,
      title: 'Americano',
      value: DrinkType.AMERICANO,
    },
  ],
  [
    DrinkType.ESPRESSO,
    {
      imageSrc: espresso,
      title: 'Espresso',
      value: DrinkType.ESPRESSO,
    },
  ],
  [
    DrinkType.CAPPUCCINO,
    {
      imageSrc: cappucino,
      title: 'Cappuccino',
      value: DrinkType.CAPPUCCINO,
    },
  ],
  [
    DrinkType.LATTE,
    {
      imageSrc: lattee,
      title: 'Latte',
      value: DrinkType.LATTE,
    },
  ],
  [
    DrinkType.ICED_LATTE,
    {
      imageSrc: icedlatte,
      title: 'Iced Latte',
      value: DrinkType.ICED_LATTE,
    },
  ],
  [
    DrinkType.MATCHA,
    {
      imageSrc: matcha,
      title: 'Matcha',
      value: DrinkType.MATCHA,
    },
  ],
])
