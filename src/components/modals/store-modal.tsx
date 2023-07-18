'use client'

import { useStoreModal } from '@/hooks/use-store-modal'
import { Modal } from '@/components/ui/modal'

export const StoreModal = () => {
  const storeModal = useStoreModal()
  return (
    <Modal
      title='Crete store'
      description='add a new store to manage products and categories'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    ></Modal>
  )
}
