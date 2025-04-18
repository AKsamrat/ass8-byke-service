"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidationSchemas = void 0;
const zod_1 = require("zod");
const update = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z.string().optional(),
    })
});
exports.serviceValidationSchemas = {
    update
};
