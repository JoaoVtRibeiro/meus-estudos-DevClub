import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { createTransactionDTO } from "../dtos/transactions.dto";

export class TransactionService {
    constructor(private transactionsRepository: TransactionsRepository) {}

    async create({tile, type, data, categoryId, amount}: createTransactionDTO): Promise<Transaction> {

    }
}