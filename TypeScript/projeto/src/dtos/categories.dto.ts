import { z } from 'zod'

export const createCategorySchema = {
    title: z.string(),
    color: z.string().regex(/^#[A-Fa-f0-9]{6}$/)
}

const createCategoryObject = z.object(createCategorySchema)
export type CreateCategoryDTO = z.infer<typeof createCategoryObject>


/* 
    DTO - Data Transfer Object / Objeto de Transferência de Dados

        A função de um dto é basicamente, definir quais tipos serão recebidos para poder criar/listar uma categoria
        ele não é relacionado a nenhuma entidade ou algo do tipo, tem haver com a propria api, com o que o usuario envia.
        É simplismente fazer um tipo customizado para saber o que será passado, porque quando os dados são enviados pela api,
        nem sempre vão ser os mesmo tipos dados de uma entidade por exemplo.

        É uma boa pratica, que ajuda na validação dos dados
*/