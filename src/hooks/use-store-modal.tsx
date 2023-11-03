import { create } from 'zustand'

interface useStoreModalInterface {
  isOpen: boolean
  onOpen: () => {}
  onClose: () => {}
}

export const useStoreModal = create<useStoreModalInterface>(set => ({
  isOpen: false,
  onOpen: async () => set({ isOpen: true }),
  onClose: async () => set({ isOpen: false })
}))
