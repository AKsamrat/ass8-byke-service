import prisma from "../../../shared/prisma"

const createBike = async (payload: any) => {
  const result = await prisma.bike.create({
    data: payload
  })
  return result
}

const getSingleBike = async (bikeId: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId
    }
  })
  return result
}
const getAllBike = async () => {
  const result = await prisma.bike.findMany()
  return result
}

export const bikeService = {
  createBike,
  getSingleBike,
  getAllBike,

}