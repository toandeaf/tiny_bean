export interface Option<T> {
  imageSrc?: string
  title: string
  value: T
}

export interface Order {
  type: OrderType
  numberOfShots: number
  milkType: MilkType
  size: Size
  extras: Array<string>
  notes: string
}

export enum OrderType {
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
