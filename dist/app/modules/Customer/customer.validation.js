"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidationSchemas = void 0;
const zod_1 = require("zod");
const customer = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        phone: zod_1.z.number().positive()
    })
});
exports.customerValidationSchemas = {
    customer
};
