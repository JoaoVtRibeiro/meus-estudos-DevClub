/* 
    Interfaces e Tipos Personalizados

        Permitem definir estruturas próprias de dados com base nas necessidades do seu código.
        Isso é feito usando a palavra-chave type ou interface para definir um novo tipo, 
        que pode ser usado para declarar: variáveis, parâmetros de função, retornos de função

        Essa funcionalidade permite uma maior expressividade e segurança no desenvolvimento de código TypeScript.

        Obs: É bem parecido com a construção de um objeto, porém os dados são separados por ; em vez de ,
*/

// Tipo personalizado
type Coordinate = {
    x: number;
    y: number;
}

// Objeto com o tipo personalizado
const coordinate: Coordinate = {
    x: 20,
    y: 8
}

// Parâmetros da função com o tipo personalizado
function calculateDistance(pointA: Coordinate, pointB: Coordinate): number {
    const dx = pointB.x - pointA.x
    const dy = pointB.y - pointA.y

    const result = Math.sqrt(dx * dx + dy * dy)

    return result
}

const coordinateA: Coordinate = {
    x: 20,
    y: 8,
}

const coordinateB: Coordinate = {
    x: 15,
    y: 30,
}

console.log(calculateDistance(coordinateA, coordinateB))
