/* 
    Interfaces

        Funcionam de forma muito parecida com o "type", porém a diferente entre eles é:
        type - é utilizado para personalizar objetos mais comuns
        interface - utilizado para personalizar objetos com implementações (como uma função)

        No fim, ambos funcionam da mesma forma como div e main por exemplo, mas existe essa diferença por semântica
*/

interface Car {
    brand: string;
    model: string;
    year: number;
    startedEngine: () => void; // Função para receber a implementação
}

const myCar: Car = {
    brand: 'Audi',
    model: 'A3',
    year: 2023,
    startedEngine: () => { // Implementação
        console.log('Engine started')
    }
}

function drive(car: Car): void {
    console.log(`Driving ${car.brand} - ${car.model}`)

    car.startedEngine()
}

drive(myCar)