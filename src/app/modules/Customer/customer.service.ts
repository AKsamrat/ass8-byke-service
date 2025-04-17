import prisma from "../../../shared/prisma"

const createCustomer = async (payload: { name: string, email: string, phone: string }) => {
  const result = await prisma.customer.create({
    data: payload
  })
  return result
}

const getSingleCustomer = async (customerId: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId
    }
  })
  return result
}
const getAllCustomer = async () => {
  const result = await prisma.customer.findMany()
  return result
}
const updateCustomer = async (customerId: string, payload: any) => {
  const result = await prisma.customer.update({
    where: {
      customerId
    },
    data: payload
  })
  return result
}
const deleteCustomer = async (customerId: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId
    }

  })
  // return result
}
export const customerService = {
  createCustomer,
  getSingleCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer
}