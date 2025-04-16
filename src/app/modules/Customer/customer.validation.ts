
import { z } from "zod";

const customer = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.number().positive()
  })
});


export const customerValidationSchemas = {
  customer
}