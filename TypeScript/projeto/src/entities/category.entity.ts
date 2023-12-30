type CategoryProps = {
    id?: string;
    title: string;
    color: string;
}

export class Category{
    public id?: string;
    public title: string;
    public color: string;

    constructor({ id , color, title}: CategoryProps){
        this.id = id
        this.title = title
        this.color = color.toUpperCase() // Padronizando os dados para serem todos em maiúsculo
    }
}

const category = new Category({id: 'id-da-instancia', title:'title', color: '#ff33bb'}) // Instanciando a classe


/* 
    Entity: Modelagem os dados, o "coração" do projeto (Não necessáriamente só os dados do banco, mas também auxiliares)
*/