import { create } from 'zustand/index'
import { MilkType, Order, OrderType, Size } from '../types/types.ts'

export const DEFAULT_ORDER: Order = {
  type: OrderType.AMERICANO,
  numberOfShots: 2, // Changed to number
  milkType: MilkType.WHOLE,
  size: Size.MEDIUM,
  extras: [],
  notes: '',
}

interface OrderState {
  overallOrder: Array<Order>
  order: Order | null

  addOrder: (order: Order) => void
  removeOrder: (order: Order) => void
  setOrder: (order: Order | null) => void
  setField: <K extends keyof Order>(key: K, value: Order[K]) => void
}

export const useOrderStore = create<OrderState>((set) => ({
  overallOrder: [],
  order: null,

  addOrder: (order) =>
    set((state) => {
      const newOverallOrder = [...state.overallOrder, order]
      return { ...state, overallOrder: newOverallOrder }
    }),

  removeOrder: (order) =>
    set((state) => {
      console.log(order)
      console.log(state.overallOrder)
      // TODO
      return state
    }),

  setOrder: (order) => set({ order }),
  setField: (key, value) =>
    set((state) => {
      if (!state.order) return state
      return { order: { ...state.order, [key]: value } }
    }),
}))
