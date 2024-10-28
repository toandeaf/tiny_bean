import americano from '../assets/americano.png';
import espresso from '../assets/espresso.png';
import cappucino from '../assets/cappucino.png';
import lattee from '../assets/latte.png';
import icedlatte from '../assets/icedlatte.png';
import matcha from '../assets/matcha.png';
import { OrderOption, OrderType } from '../types/types.ts';

export const ORDER_OPTIONS: Array<OrderOption> = [
  {
    imageSrc: americano,
    title: 'Americano',
    type: OrderType.AMERICANO,
  },
  {
    imageSrc: espresso,
    title: 'Espresso',
    type: OrderType.ESPRESSO,
  },
  {
    imageSrc: cappucino,
    title: 'Cappucino',
    type: OrderType.CAPPUCCINO,
  },
  {
    imageSrc: lattee,
    title: 'Latte',
    type: OrderType.LATTE,
  },
  {
    imageSrc: icedlatte,
    title: 'Iced Latte',
    type: OrderType.ICED_LATTE,
  },
  {
    imageSrc: matcha,
    title: 'Matcha',
    type: OrderType.MATCHA,
  },
];
