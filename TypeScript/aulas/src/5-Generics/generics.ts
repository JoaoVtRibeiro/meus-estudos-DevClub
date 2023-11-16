/* 
    Generics

 */

function getFirstElement<T>(data: T[]): T | null {
    if (!data.length) {
        return null
    }

    const [firstElement] = data

    return firstElement
}

const stringArray: string[] = ['Lucas', 'Fernando', 'Gabriel', 'Maria']
const numberArray: number[] = [1, 2, 3, 4, 5, 6]

console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(numberArray))
