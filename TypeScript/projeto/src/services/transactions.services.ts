import { StatusCodes } from 'http-status-codes'
import { CategoriesRepository } from '../database/repositories/categories.repository'
import { TransactionsRepository } from '../database/repositories/transactions.repository'
import { CreateTransactionDTO } from '../dtos/transactions.dto'
import { Transaction } from '../entities/transactions.entity'
import { AppError } from '../errors/app.error'

export class TransactionsService {
    constructor(
        private transactionsRepository: TransactionsRepository,
        private categoriesRepository: CategoriesRepository
        ) {}

    async create({title, type, date, categoryId, amount}: CreateTransactionDTO): Promise<Transaction> {
        const category = await this.categoriesRepository.findById(categoryId)

        if(!category) {
            throw new AppError('Category does not exist', StatusCodes.NOT_FOUND)
        }

        const transaction = new Transaction({
            title,
            type,
            date,
            category,
            amount
        })

        const createTransaction = await this.transactionsRepository.create(transaction)

        return createTransaction
    }

    async index(): Promise<Transaction[]> {
        const transactions = await this.transactionsRepository.index()

        return transactions
    }
}