import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { customerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.createCustomer(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer Created successfuly!",
    data: result
  })


})
export const customerController = {
  createCustomer
}