import prisma from "../../../shared/prisma"

const createCustomer = async (payload: { name: string, email: string, phone: string }) => {
  const result = await prisma.customer.create({
    data: payload
  })
}

export const customerService = {
  createCustomer,
}