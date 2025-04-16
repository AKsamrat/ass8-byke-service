
import express from 'express'
import { adminController } from './admin.controller';
import validateRequest from '../../middleware/validateRequest';
import { adminValidationSchemas } from './admin.validation';

const router = express.Router()


router.get('/', adminController.getAllFromDB)
router.get('/:id', adminController.getByIdFromDB)
router.delete('/:id', adminController.deleteFromDB)
router.delete('/soft/:id', adminController.softDeleteFromDB)
router.patch('/:id', validateRequest(adminValidationSchemas.update), adminController.updateIntoDB)

export const AdminRouter = router;