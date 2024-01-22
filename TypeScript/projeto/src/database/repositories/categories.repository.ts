import { Category } from '../../entities/category.entity'
import { CategoryModel } from '../schemas/category.schema'

export class CategoriesRepository {
    constructor(private model: typeof CategoryModel) { } // typeof definindo que o model da classe será "do tipo" do model criado no category.schema

    async create({ title, color }: Category): Promise<Category> { // método para criar as categorias dentro do banco
        const createdCategory = await this.model.create({ title, color }) // por conta do model, será possivel acessar os métodos de persistencia de dados do mongodb, como o create

        return createdCategory.toObject<Category>() 
        // sem o "toObject", será retornado apenas um objeto de documento do mongo, como será um json da resposta, além disso ele recebe uma tipagem genérica, no caso o Category
    }
}

// Lembrando que o model que permite a conexão com o banco

/* 
    - Funções assíncronas no typescript devolvem uma "Promise" e por consequencia, quando ela se revolver, ela devolve um tipo
        No caso, a "Promise" de "create" está devolvendo a entidade "Category"
*/