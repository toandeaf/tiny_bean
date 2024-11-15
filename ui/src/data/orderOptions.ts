import americano from '/images/americano.png'
import espresso from '/images/espresso.png'
import cappucino from '/images/cappucino.png'
import lattee from '/images/latte.png'
import icedlatte from '/images/icedlatte.png'
import matcha from '/images/matcha.png'
import { Option, OrderType } from 'types/types.ts'

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
