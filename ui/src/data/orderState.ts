import { create } from 'zustand/index'


interface OrderState {
  orders: number
  increase: () => void,
  decrease: () => void,
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: 0,
  increase: () => set((state) => ({ orders: state.orders + 1 })),
  decrease: () => set((state) => ({ orders: state.orders - 1 })),
}))
