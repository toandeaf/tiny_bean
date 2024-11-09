import americano from '../assets/americano.png'
import espresso from '../assets/espresso.png'
import cappucino from '../assets/cappucino.png'
import lattee from '../assets/latte.png'
import icedlatte from '../assets/icedlatte.png'
import matcha from '../assets/matcha.png'
import { Option, OrderType } from '../types/types.ts'

export const ORDER_MAP: Map<OrderType, Option<OrderType>> = new Map([
  [
    OrderType.AMERICANO,
    {
      imageSrc: americano,
      title: 'Americano',
      value: OrderType.AMERICANO,
    },
  ],
  [
    OrderType.ESPRESSO,
    {
      imageSrc: espresso,
      title: 'Espresso',
      value: OrderType.ESPRESSO,
    },
  ],
  [
    OrderType.CAPPUCCINO,
    {
      imageSrc: cappucino,
      title: 'Cappuccino',
      value: OrderType.CAPPUCCINO,
    },
  ],
  [
    OrderType.LATTE,
    {
      imageSrc: lattee,
      title: 'Latte',
      value: OrderType.LATTE,
    },
  ],
  [
    OrderType.ICED_LATTE,
    {
      imageSrc: icedlatte,
      title: 'Iced Latte',
      value: OrderType.ICED_LATTE,
    },
  ],
  [
    OrderType.MATCHA,
    {
      imageSrc: matcha,
      title: 'Matcha',
      value: OrderType.MATCHA,
    },
  ],
])
