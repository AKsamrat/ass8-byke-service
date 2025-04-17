import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { customerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.createCustomer(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer Created successfuly!",
    data: result
  })


})
const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {

  const { customerId } = req.params;
  const result = await customerService.getSingleCustomer(customerId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result
  })


})
const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const result = await customerService.deleteCustomer(customerId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers deleted successfully",
    data: result
  })


})
const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const result = await customerService.updateCustomer(customerId, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result
  })


})
const getAllCustomer = catchAsync(async (req: Request, res: Response) => {

  const result = await customerService.getAllCustomer()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result
  })


})
export const customerController = {
  createCustomer,
  getSingleCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer
}