/* 
    Enum
*/

const gender = {
    male: 'male',
    female: 'female',
    other: 'other'
}

enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

Gender.FEMALE


type Person = {
    name: string;
    age: number;
    gender: Gender;
}

const person: Person = {
    name: 'Joao',
    age: 12,
    gender: Gender.MALE
}
