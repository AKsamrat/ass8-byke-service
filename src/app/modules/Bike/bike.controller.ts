import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { bikeService } from "../Bike/bike.service";

const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeService.createBike(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike Created successfuly!",
    data: result
  })


})
const getSingleBike = catchAsync(async (req: Request, res: Response) => {

  const { bikeId } = req.params;
  const result = await bikeService.getSingleBike(bikeId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result
  })


})


const getAllBike = catchAsync(async (req: Request, res: Response) => {

  const result = await bikeService.getAllBike()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result
  })


})
export const bikeController = {
  createBike,
  getSingleBike,
  getAllBike,
}