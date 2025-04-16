import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AdminService } from './admin.service';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import pic from '../../../shared/pic';
import { adminFilterableField } from './admin.constant';
import catchAsync from '../../../shared/catchAsync';


const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  // console.log(req.query)
  const filters = pic(req.query, adminFilterableField);
  const options = pic(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
  console.log(options)
  const result = await AdminService.getAllfromDB(filters, options)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data fetched!",
    meta: result.meta,
    data: result.data
  })
})

const getByIdFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const result = await AdminService.getByIdFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched by id!",
      data: result
    });


  }
)


const updateIntoDB: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;

    const result = await AdminService.updateIntoDB(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data updated!",
      data: result
    })


  }
)

const deleteFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;

    const result = await AdminService.deleteFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data deleted!",
      data: result
    })


  }
)


const softDeleteFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const { id } = req.params;

    const result = await AdminService.softDeleteFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data deleted!",
      data: result
    })

  }
)

export const adminController = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  softDeleteFromDB
}