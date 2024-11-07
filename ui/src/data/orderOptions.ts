import americano from '../assets/americano.png'
import espresso from '../assets/espresso.png'
import cappucino from '../assets/cappucino.png'
import lattee from '../assets/latte.png'
import icedlatte from '../assets/icedlatte.png'
import matcha from '../assets/matcha.png'
import { OrderOption, OrderType } from '../types/types.ts'

export const ORDER_MAP: Map<OrderType, OrderOption> = new Map([
  [OrderType.AMERICANO, {
    imageSrc: americano,
    title: 'Americano',
    type: OrderType.AMERICANO,
  }],
  [OrderType.ESPRESSO, {
    imageSrc: espresso,
    title: 'Espresso',
    type: OrderType.ESPRESSO,
  }],
  [OrderType.CAPPUCCINO, {
    imageSrc: cappucino,
    title: 'Cappuccino',
    type: OrderType.CAPPUCCINO,
  }],
  [OrderType.LATTE, {
    imageSrc: lattee,
    title: 'Latte',
    type: OrderType.LATTE,
  }],
  [OrderType.ICED_LATTE, {
    imageSrc: icedlatte,
    title: 'Iced Latte',
    type: OrderType.ICED_LATTE,
  }],
  [OrderType.MATCHA, {
    imageSrc: matcha,
    title: 'Matcha',
    type: OrderType.MATCHA,
  }],
])