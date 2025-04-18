"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.create({
        data: payload
    });
    return result;
});
const getSingleService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("controller")
    const result = yield prisma_1.default.service.findUniqueOrThrow({
        where: {
            serviceId
        }
    });
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany();
    return result;
});
const getPendingOrOverdueService = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.default.service.findMany({
        where: {
            OR: [
                {
                    status: {
                        in: ["pending", "in_progress"],
                    },
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    return result;
});
const updateService = (serviceId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(completionDate);
    const result = yield prisma_1.default.service.update({
        where: {
            serviceId
        },
        data: {
            status: "done",
            completionDate: new Date(completionDate)
        }
    });
    return result;
});
exports.servicesService = {
    createService,
    getSingleService,
    getAllService,
    updateService,
    getPendingOrOverdueService
};
