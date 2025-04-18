"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoute = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const service_validation_1 = require("./service.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post('/', services_controller_1.servicesController.createService);
router.get('/status', services_controller_1.servicesController.getPendingOrOverdueService);
router.get('/:serviceId', services_controller_1.servicesController.getSingleService);
router.put('/:serviceId/complete', (0, validateRequest_1.default)(service_validation_1.serviceValidationSchemas.update), services_controller_1.servicesController.updateService);
router.get('/', services_controller_1.servicesController.getAllService);
exports.serviceRoute = router;
