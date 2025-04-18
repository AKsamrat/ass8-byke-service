"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post('/', customer_controller_1.customerController.createCustomer);
router.get('/:customerId', customer_controller_1.customerController.getSingleCustomer);
router.put('/:customerId', customer_controller_1.customerController.updateCustomer);
router.get('/', customer_controller_1.customerController.getAllCustomer);
router.delete('/:customerId', customer_controller_1.customerController.deleteCustomer);
exports.customerRoute = router;
