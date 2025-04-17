import { date, z } from "zod";

const update = z.object({
  body: z.object({
    completionDate: z.string().optional(),
  })
});


export const serviceValidationSchemas = {
  update
}