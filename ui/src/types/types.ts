export interface Option<T> {
  imageSrc?: string
  title: string
  value: T
}

export interface Drink {
  type: DrinkType
  numberOfShots: number
  milkType: MilkType
  size: Size
  extras: Array<Extra>
  notes: string
}

export enum Extra {
  CARAMEL = 'Caramel',
  HAZELNUT = 'Hazelnut',
  MINT = 'Mint',
  VANILLA = 'Vanilla',
  CREAM = 'Cream',
  CHOCOLATE = 'Chocolate',
  DECAF = 'Decaf',
}

export enum DrinkType {
  AMERICANO = 'Americano',
  ESPRESSO = 'Espresso',
  CAPPUCCINO = 'Cappuccino',
  LATTE = 'Latte',
  ICED_LATTE = 'Iced Latte',
  MATCHA = 'Matcha',
}

export enum MilkType {
  NONE = 'None',
  WHOLE = 'Whole',
  SKIM = 'Skim',
  OAT = 'Oat',
  ALMOND = 'Almond',
}

export enum Size {
  SMALL = 'Small',
  MEDIUM = 'Medium',
  LARGE = 'Large',
}
