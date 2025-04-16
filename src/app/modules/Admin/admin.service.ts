import { Admin, Prisma, UserStatus } from "@prisma/client";
import { adminSearchAbleFields } from "./admin.constant";
import { calculatePagination } from "../../helper/paginationHelper";
import prisma from "../../../shared/prisma";
import { IAdminFilterRequest } from "./admin.interface";
import { IPaginationOptions } from "../../interface/pagination";

const getAllfromDB = async (params: IAdminFilterRequest, option: IPaginationOptions) => {
  const { limit, page, skip } = calculatePagination(option);
  const { searchTerm, ...filterData } = params
  const andCondition: Prisma.AdminWhereInput[] = [];

  //search term
  if (params.searchTerm) {
    andCondition.push({
      OR: adminSearchAbleFields.map(field => ({
        [field]: {
          contains: params.searchTerm,
          mode: 'insensitive'
        }
      }))
    })

  }
  //specific field filtering
  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key]
        }
      }))
    })
  }
  andCondition.push({
    isDeleted: false
  })

  console.log(option)
  const whereConditions: Prisma.AdminWhereInput = { AND: andCondition }
  const result = await prisma.admin.findMany({
    where: whereConditions,
    skip,
    take: limit,
    // orderBy: {
    //   [option.sortBy]: option.sortOrder
    // }
    orderBy: option.sortBy && option.sortOrder ? {
      [option.sortBy]: option.sortOrder
    } : {
      createdAt: 'desc'
    }
  });
  const total = await prisma.admin.count({
    where: whereConditions
  })
  return {
    meta: {
      page,
      limit,
      total
    },
    data: result
  }
}

const getByIdFromDB = async (id: string) => {
  const result = await prisma.admin.findUnique({
    where: {
      id: id,
      isDeleted: false
    }
  })
  return result
}

const updateIntoDB = async (id: string, data: Partial<Admin>) => {

  await prisma.admin.findFirstOrThrow({
    where: {
      id,
      isDeleted: false
    }
  })
  const result = await prisma.admin.update({
    where: {
      id,
      isDeleted: false
    },
    data
  })
}

const deleteFromDB = async (id: string) => {

  await prisma.admin.findFirstOrThrow({
    where: {
      id,
      isDeleted: false
    }
  })
  const result = await prisma.$transaction(async (transactionClient) => {
    const adminDeletedData = await transactionClient.admin.delete({
      where: {
        id,

      }
    })
    const userDeletedData = await transactionClient.user.delete({
      where: {
        email: adminDeletedData.email
      }
    })
    return adminDeletedData;
  })
  return result
}
const softDeleteFromDB = async (id: string) => {

  await prisma.admin.findFirstOrThrow({
    where: {
      id,
      isDeleted: false
    }
  })
  const result = await prisma.$transaction(async (transactionClient) => {
    const adminDeletedData = await transactionClient.admin.update({
      where: {
        id,

      },
      data: {
        isDeleted: true
      }
    })
    const userDeletedData = await transactionClient.user.update({
      where: {
        email: adminDeletedData.email
      },
      data: {
        status: UserStatus.DELETED
      }
    })
    return adminDeletedData;
  })
  return result
}
export const AdminService = {
  getAllfromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  softDeleteFromDB
}