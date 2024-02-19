import { Category } from '../../entities/category.entity'
import { CategoryModel } from '../schemas/category.schema'

export class CategoriesRepository {
    constructor(private model: typeof CategoryModel) {} // typeof definindo que o model da classe será "do tipo" do model criado no category.schema

    async create({ title, color }: Category): Promise<Category> { // método para criar as categorias dentro do banco
        const createdCategory = await this.model.create({ title, color }) // por conta do model, será possivel acessar os métodos de persistencia de dados do mongodb, como o create

        return createdCategory.toObject<Category>()
        // sem o "toObject", será retornado apenas um objeto de documento do mongo, como será um json da resposta, além disso ele recebe uma tipagem genérica, no caso o Category
    }

    async findByTitle(title: string): Promise<Category | undefined> { // Encontrar categoria por titulo repetido, o retorno será uma categoria ou não definido
        const category = await this.model.findOne({ title }) // Lembrando que o model que permite a conexão ao banco

        return category?.toObject<Category>() // ? Porque pode não existir (undefined) e conversão para json
    }

    async index(): Promise<Category[]> {
        const categories = await this.model.find()

        const categoriesMap = categories.map((item) => item.toObject<Category>()) // Transformando cada item que está como documento do mongo para json do tipo da entidade Category

        return categoriesMap
    }
}

// Lembrando que o model que permite a conexão com o banco

/* 
    - Funções assíncronas no typescript devolvem uma "Promise" e por consequencia, quando ela se revolver, ela devolve um tipo
        No caso, a "Promise" de "create" está devolvendo a entidade "Category"


    Em "return category?.toObject<Category>()" o () é uma sintaxe de Type Assertion/Type Casting,
    está dizendo ao compilador TypeScript para considerar o objeto retornado por toObject() como do tipo Category
    No caso, se não retornar nulo, o que objeto que vier do "toObject()" por conta do <Category>() será considerado do tipo Category
*/