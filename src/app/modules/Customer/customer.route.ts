import express from 'express'
import { customerController } from './customer.controller';


const router = express.Router()


router.post('/', customerController.createCustomer)
router.get('/:customerId', customerController.getSingleCustomer)
router.put('/:customerId', customerController.updateCustomer)
router.get('/', customerController.getAllCustomer)
router.delete('/:customerId', customerController.deleteCustomer)


export const customerRoute = router;