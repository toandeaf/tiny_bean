import caramel from '/images/caramel.png'
import hazelnut from '/images/hazelnut.png'
import mint from '/images/mint.png'
import vanilla from '/images/vanilla.png'
import cream from '/images/cream.png'
import chocolate from '/images/chocolate.png'
import decaf from '/images/decaf.png'
import no_milk from '/images/no_milk.png'
import milk_blue from '/images/milk_blue.png'
import milk_red from '/images/milk_red.png'
import oats from '/images/oats.png'
import almond from '/images/almond.png'

import { MilkType, Option } from 'types/types.ts'

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
  { imageSrc: no_milk, title: 'None', value: MilkType.NONE },
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
