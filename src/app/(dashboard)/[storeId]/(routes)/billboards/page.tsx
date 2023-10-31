import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import { BillboardClient } from './component/client'
import { BillboardColumn } from './component/columns'

interface BillboardPageProps {
  params: {
    storeId: string
  }
}

const Billboards: React.FC<BillboardPageProps> = async ({ params }) => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const billboard = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createAt: 'desc'
    }
  })

  if (!billboard) {
    redirect('/')
  }

  const formattedBillboards: BillboardColumn[] = billboard.map(item => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createAt, 'MMMM do, yyyy')
  }))

  return (
    <div className='flex flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  )
}

export default Billboards
