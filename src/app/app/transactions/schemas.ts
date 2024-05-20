import { z } from "zod";

export const createTransactionSchema = z.object({
    type: z.enum(['INCOME', 'EXPENSE']),
    amount: z.coerce.number().positive({ message: "Amount can't be negative" }),
    date: z.date(),
    description: z.string(),
    categoryId: z.coerce.number()
});