"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const admin_validation_1 = require("./admin.validation");
const router = express_1.default.Router();
router.get('/', admin_controller_1.adminController.getAllFromDB);
router.get('/:id', admin_controller_1.adminController.getByIdFromDB);
router.delete('/:id', admin_controller_1.adminController.deleteFromDB);
router.delete('/soft/:id', admin_controller_1.adminController.softDeleteFromDB);
router.patch('/:id', (0, validateRequest_1.default)(admin_validation_1.adminValidationSchemas.update), admin_controller_1.adminController.updateIntoDB);
exports.AdminRouter = router;
