import { create } from 'zustand'

interface useStoreModalInterface {
  isOpen: boolean
  onOpen: () => {}
  onClose: () => {}
}

export const useStoreModal = create<useStoreModalInterface>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))
