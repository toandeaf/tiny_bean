export interface Option {
  imageSrc?: string;
  title: string;
}

export interface OrderOption extends Option {
  type: OrderType;
}

export interface Order {
  type: OrderType;
  numberOfShots: number;
  milkType: MilkType;
  size: Size;
  flavouring: string;
  decaf: boolean;
  notes: string;
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
