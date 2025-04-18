import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { bikeService } from "../Bike/bike.service";
import { servicesService } from "./servicess.service";

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await servicesService.createService(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result
  })


})
const getSingleService = catchAsync(async (req: Request, res: Response) => {

  const { serviceId } = req.params;
  const result = await servicesService.getSingleService(serviceId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record faced successfully",
    data: result
  })


})


const getAllService = catchAsync(async (req: Request, res: Response) => {

  const result = await servicesService.getAllService()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result
  })


})
const getPendingOrOverdueService = catchAsync(async (req: Request, res: Response) => {
  console.log("controller")
  const result = await servicesService.getPendingOrOverdueService()
  console.log(result)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result
  })


})
const updateService = catchAsync(async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const { completionDate } = req.body
  // console.log("contr", completionDate)
  const parsedDate = completionDate ? new Date(completionDate) : new Date();
  const result = await servicesService.updateService(serviceId, parsedDate)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record updated successfully",
    data: result
  })


})
export const servicesController = {
  createService,
  getSingleService,
  getAllService,
  updateService,
  getPendingOrOverdueService
}