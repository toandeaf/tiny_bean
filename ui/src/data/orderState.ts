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
  currentOrder: Array<Order>
  order: Order | null

  addOrder: (order: Order) => void
  removeOrder: (order: Order) => void
  clearOrders: () => void
  setOrder: (order: Order | null) => void
  setField: <K extends keyof Order>(key: K, value: Order[K]) => void
}

export const useOrderStore = create<OrderState>((set) => ({
  currentOrder: [],
  order: null,

  addOrder: (order) =>
    set((state) => {
      const newOverallOrder = [...state.currentOrder, order]
      return { ...state, overallOrder: newOverallOrder }
    }),

  removeOrder: () =>
    set((state) => {
      // TODO - Implement removeOrder
      return state
    }),

  clearOrders: () => set({ currentOrder: [] }),

  setOrder: (order) => set({ order }),
  setField: (key, value) =>
    set((state) => {
      if (!state.order) return state
      return { order: { ...state.order, [key]: value } }
    }),
}))
