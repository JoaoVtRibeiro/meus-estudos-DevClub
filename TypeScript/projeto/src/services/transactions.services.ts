import { CategoriesRepository } from '../database/repositories/categories.repository'
import { TransactionsRepository } from '../database/repositories/transactions.repository'
import { CreateTransactionDTO } from '../dtos/transactions.dto'
import { Transaction } from '../entities/transactions.entity'

export class TransactionService {
    constructor(
        private transactionsRepository: TransactionsRepository,
        private categoriesRepository: CategoriesRepository
        ) {}

    async create({title, type, date, categoryId, amount}: CreateTransactionDTO): Promise<Transaction> {
        const category = await this.categoriesRepository.findById(categoryId)
    }
}