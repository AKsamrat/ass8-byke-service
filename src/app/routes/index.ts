import express from 'express';

import { customerRoute } from '../modules/Customer/customer.route';



const router = express.Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: customerRoute
  },
  // {
  //   path: '/admin',
  //   route: AdminRouter
  // },
  // {
  //   path: '/auth',
  //   route: AuthRouter
  // }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;