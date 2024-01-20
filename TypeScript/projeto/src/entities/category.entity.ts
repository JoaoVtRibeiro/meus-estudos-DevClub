type CategoryProps = {
    _id?: string; // Os _Id do mongo são salvos com um "_" na frente
    title: string;
    color: string;
}

export class Category{
    public _id?: string;
    public title: string;
    public color: string;

    constructor({ _id , color, title}: CategoryProps){
        this._id = _id
        this.title = title
        this.color = color.toUpperCase() // Padronizando os dados para serem todos em maiúsculo
    }
}

const category = new Category({_id: '_id-da-instancia', title:'title', color: '#ff33bb'}) // Instanciando a classe


/* 
    Entity: Modelagem os dados, o "coração" do projeto (Não necessáriamente só os dados do banco, mas também auxiliares)
*/