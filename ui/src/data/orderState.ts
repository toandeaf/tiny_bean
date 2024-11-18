import { create } from 'zustand/index'
import { Drink, DrinkType, MilkType, Size } from 'types/types.ts'

export const DEFAULT_DRINK: Drink = {
  type: DrinkType.AMERICANO,
  numberOfShots: 2, // Changed to number
  milkType: MilkType.WHOLE,
  size: Size.MEDIUM,
  extras: [],
  notes: '',
}

interface OrderState {
  orderDrinks: Array<Drink>
  currentDrink: Drink | null

  addDrink: (drink: Drink) => void
  removeDrink: (drink: Drink) => void
  clearDrinks: () => void
  setDrink: (drink: Drink | null) => void
  setField: <K extends keyof Drink>(key: K, value: Drink[K]) => void
}

export const useOrderStore = create<OrderState>((set) => ({
  orderDrinks: [],
  currentDrink: null,

  addDrink: (order) =>
    set((state) => {
      state.orderDrinks.push(order)
      return state
    }),

  removeDrink: (order) =>
    set((state) => {
      console.log(order)
      // TODO - Implement removeOrder
      return state
    }),

  clearDrinks: () => set({ orderDrinks: [] }),

  setDrink: (drink) => set({ currentDrink: drink }),
  setField: (key, value) =>
    set((state) => {
      if (!state.currentDrink) return state
      return { currentDrink: { ...state.currentDrink, [key]: value } }
    }),
}))
