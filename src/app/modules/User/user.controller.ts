import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {

  try {
    // console.log(req.body)
    const result = await userService.createAdmin(req.body);
    res.send(200).json({
      success: true,
      message: "Admin create Successfully",
      data: result
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something Went wrong",
      error: err
    })
  }
}

export const userController = {
  createAdmin
}
