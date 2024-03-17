import { Category } from './category.entity'

type TransactionProps =  {
    _id?: string;
    amount: number;
    date: Date;
    category: Category;
}