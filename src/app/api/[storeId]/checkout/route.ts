import { NextResponse } from 'next/server'

import prismadb from '@/lib/prismadb'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

export async function OPTIONS () {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST (
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { productIds, address, phone, name } = await req.json()

    if (!productIds || productIds.length === 0) {
      return new NextResponse('Product ids are required', { status: 400 })
    }

    const order = await prismadb.order.create({
      data: {
        storeId: params.storeId,
        isPaid: true,
        name,
        address,
        phone,
        orderItems: {
          create: productIds.map((productId: string) => ({
            product: {
              connect: {
                id: productId
              }
            }
          }))
        }
      }
    })

    return NextResponse.json(
      { url: `${process.env.FRONTEND_STORE_URL}/cart?success=1` },

      {
        headers: corsHeaders
      }
    )
  } catch (error) {
    return NextResponse.json(
      { url: `${process.env.FRONTEND_STORE_URL}/cart?canceled=1` },

      {
        headers: corsHeaders
      }
    )
  }
}
