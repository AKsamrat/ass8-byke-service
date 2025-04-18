import prisma from "../../../shared/prisma"

const createService = async (payload: any) => {
  const result = await prisma.service.create({
    data: payload
  })
  return result
}

const getSingleService = async (serviceId: string) => {
  // console.log("controller")
  const result = await prisma.service.findUniqueOrThrow({
    where: {
      serviceId
    }
  })
  return result
}
const getAllService = async () => {
  const result = await prisma.service.findMany()
  return result
}
const getPendingOrOverdueService = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.service.findMany({
    where: {
      OR: [
        {
          status: {
            in: ["pending", "in_progress"],
          },
        },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
  });

  return result;
};
const updateService = async (serviceId: string, completionDate: any) => {

  console.log(completionDate)
  const result = await prisma.service.update({
    where: {
      serviceId
    },
    data: {
      status: "done",
      completionDate: new Date(completionDate)
    }
  })
  return result
}

export const servicesService = {
  createService,
  getSingleService,
  getAllService,
  updateService,
  getPendingOrOverdueService

}