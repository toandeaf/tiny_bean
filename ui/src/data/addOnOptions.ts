import caramel from '../assets/caramel.png'
import hazelnut from '../assets/hazelnut.png'
import mint from '../assets/mint.png'
import vanilla from '../assets/vanilla.png'
import cream from '../assets/cream.png'
import chocolate from '../assets/chocolate.png'
import decaf from '../assets/decaf.png'
import milk_blue from '../assets/milk_blue.png'
import milk_red from '../assets/milk_red.png'
import oats from '../assets/oats.png'
import almond from '../assets/almond.png'

import { MilkType, Option } from '../types/types.ts'

export const SYRUPS: Array<Option<string>> = [
  { imageSrc: caramel, title: 'Caramel', value: 'Caramel' },
  { imageSrc: hazelnut, title: 'Hazelnut', value: 'Hazelnut' },
  {
    imageSrc: mint,
    title: 'Mint',
    value: 'Mint',
  },
  { imageSrc: vanilla, title: 'Vanilla', value: 'Vanilla' },
]

export const MISCELLANEOUS: Array<Option<string>> = [
  { imageSrc: cream, title: 'Cream', value: 'Cream' },
  { imageSrc: chocolate, title: 'Chocolate', value: 'Chocolate' },
  {
    imageSrc: decaf,
    title: 'Decaf',
    value: 'Decaf',
  },
]

export const MILKS: Array<Option<MilkType>> = [
  { imageSrc: milk_blue, title: 'Whole', value: MilkType.WHOLE },
  {
    imageSrc: milk_red,
    title: 'Skim',
    value: MilkType.SKIM,
  },
  { imageSrc: oats, title: 'Oat', value: MilkType.OAT },
  { imageSrc: almond, title: 'Almond', value: MilkType.ALMOND },
]

export const SHOTS: Array<Option<number>> = [
  { title: '1', value: 1 },
  { title: '2', value: 2 },
  { title: '3', value: 3 },
  { title: '4', value: 4 },
  { title: '5', value: 5 },
  { title: '6', value: 6 },
]
