import { CreateTransactionDTO } from '../../dtos/transactions.dto'
import { Transaction } from '../../entities/transactions.entity'
import { TransactionModel } from '../schemas/transactions.schema'

export class TransactionsRepository {
    constructor(private model: typeof TransactionModel) {} // typeof definindo que o model da classe será "do tipo" do model criado no category.schema

    async create({ title, date, amount, type, category}: Transaction): Promise<Transaction> { 
        const createdTransaction = await this.model.create({
            title, date, amount, type, category,
        }) 

        return createdTransaction.toObject<Transaction>()
    }

    async index(): Promise<Transaction[]> {
        const transactions = await this.model.find()

        const transactionsMap = transactions.map((item) => item.toObject<Transaction>()) // Transformando cada item que está como documento do mongo para json do tipo da entidade Category

        return transactionsMap
    }
}