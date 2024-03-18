import { Category } from './category.entity'

export enum TransactionType {
    INCOME = 'income',
    EXPENSE = 'expanse',
}

type TransactionProps =  {
    _id?: string;
    amount: number;
    date: Date;
    category: Category;
    type: TransactionType;
}