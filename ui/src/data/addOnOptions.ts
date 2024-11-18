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

import { Extra, MilkType, Option } from 'types/types.ts'

export const SYRUPS: Array<Option<Extra>> = [
  { imageSrc: caramel, title: 'Caramel', value: Extra.CARAMEL },
  { imageSrc: hazelnut, title: 'Hazelnut', value: Extra.HAZELNUT },
  {
    imageSrc: mint,
    title: 'Mint',
    value: Extra.MINT,
  },
  { imageSrc: vanilla, title: 'Vanilla', value: Extra.VANILLA },
]

export const MISCELLANEOUS: Array<Option<Extra>> = [
  { imageSrc: cream, title: 'Cream', value: Extra.CREAM },
  { imageSrc: chocolate, title: 'Chocolate', value: Extra.CHOCOLATE },
  {
    imageSrc: decaf,
    title: 'Decaf',
    value: Extra.DECAF,
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
