import { z } from 'zod'
import { TransactionType } from '../entities/transactions.entity'

export const createTransactionSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(TransactionType),
    data: z.coerce.date(),
    categoryId: z.string(),
}

const createTransactionObject = z.object(createTransactionSchema)
export type createTransactionDTO = z.infer<typeof createTransactionObject>