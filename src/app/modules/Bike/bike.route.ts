import express from 'express'
import { bikeController } from './bike.controller'

const router = express.Router()

router.post('/', bikeController.createBike)
router.get('/:bikeId', bikeController.getSingleBike)
router.get('/', bikeController.getAllBike)

export const bikeRoute = router;