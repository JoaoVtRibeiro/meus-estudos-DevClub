/* 
    Interfaces

*/

interface Car {
    brand: string;
    model: string;
    year: number;
    startedEngine: () => void;
}

const myCar: Car = {
    brand: 'Audi',
    model: 'A3',
    year: 2023,
    startedEngine: () => {
        console.log('Engine started')
    }
}

function drive(car: Car): void {
    console.log(`Driving ${car.brand} - ${car.model}`)

    car.startedEngine()
}

drive(myCar)