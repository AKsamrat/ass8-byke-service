import express from 'express'
import { servicesController } from './services.controller'
import { serviceValidationSchemas } from './service.validation'
import validateRequest from '../../middleware/validateRequest'

const router = express.Router()

router.post('/', servicesController.createService)
router.get('/status', servicesController.getPendingOrOverdueService)
router.get('/:serviceId', servicesController.getSingleService)
router.put('/:serviceId/complete', validateRequest(serviceValidationSchemas.update), servicesController.updateService)
router.get('/', servicesController.getAllService)

export const serviceRoute = router;