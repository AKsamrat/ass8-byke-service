import express from 'express';

import { customerRoute } from '../modules/Customer/customer.route';
import { bikeRoute } from '../modules/Bike/bike.route';
import { serviceRoute } from '../modules/Services/services.route';



const router = express.Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: customerRoute
  },
  {
    path: '/bikes',
    route: bikeRoute
  },
  {
    path: '/services',
    route: serviceRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;