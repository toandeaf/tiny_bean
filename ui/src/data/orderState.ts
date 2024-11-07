import { create } from 'zustand/index'
import { MilkType, Order, OrderType, Size } from '../types/types.ts'

export const DEFAULT_ORDER: Order = {
  type: OrderType.AMERICANO,
  numberOfShots: 2,
  milkType: MilkType.NONE,
  size: Size.MEDIUM,
  extras: [],
  notes: '',
}

interface OrderState {
  order: Order | null,
  setOrder: (order: Order) => void,
  setField: <K extends keyof Order>(key: K, value: Order[K]) => void,
}

export const useOrderStore = create<OrderState>((set) => ({
  order: null,
  setOrder: (order) => set({ order }),
  setField: (key, value) => set((state) => {
    if (!state.order) return state

    state.order = { ...state.order, [key]: value }
    return state
  }),
}))