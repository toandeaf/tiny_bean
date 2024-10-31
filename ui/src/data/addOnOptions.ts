import caramel from '../assets/caramel.png';
import hazelnut from '../assets/hazelnut.png';
import mint from '../assets/mint.png';
import vanilla from '../assets/vanilla.png';
import cream from '../assets/cream.png';
import chocolate from '../assets/chocolate.png';
import decaf from '../assets/decaf.png';
import milk_blue from '../assets/milk_blue.png';
import milk_red from '../assets/milk_red.png';
import oats from '../assets/oats.png';
import almond from '../assets/almond.png';

import { Option } from '../types/types.ts';

export const SYRUPS: Array<Option> = [
  { imageSrc: caramel, title: 'Caramel' },
  { imageSrc: hazelnut, title: 'Hazelnut' },
  {
    imageSrc: mint,
    title: 'Mint',
  },
  { imageSrc: vanilla, title: 'Vanilla' },
];

export const EXTRAS: Array<Option> = [
  { imageSrc: cream, title: 'Cream' },
  { imageSrc: chocolate, title: 'Chocolate' },
  {
    imageSrc: decaf,
    title: 'Decaf',
  },
];

export const MILKS: Array<Option> = [
  { imageSrc: milk_blue, title: 'Whole' },
  {
    imageSrc: milk_red,
    title: 'Skim',
  },
  { imageSrc: oats, title: 'Oat' },
  { imageSrc: almond, title: 'Almond' },
];

export const SHOTS: Array<Option> = [
  { title: '1' },
  { title: '2' },
  { title: '3' },
  { title: '4' },
  { title: '5' },
  { title: '6' },
];
