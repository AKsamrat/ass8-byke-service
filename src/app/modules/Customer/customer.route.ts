import express from 'express'

import validateRequest from '../../middleware/validateRequest';
import { customerController } from './customer.controller';


const router = express.Router()


router.post('/', customerController.createCustomer)
// router.get('/:id', adminController.getByIdFromDB)
// router.delete('/:id', adminController.deleteFromDB)
// router.delete('/soft/:id', adminController.softDeleteFromDB)
// router.patch('/:id', validateRequest(adminValidationSchemas.update), adminController.updateIntoDB)

export const customerRoute = router;