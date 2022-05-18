//type keyword in TS is used to define a type alias for objects.
type Person = {
    name: string,
    age: number
}

//replace
// let person1: {
//     name: string,
//     age: number
// };

let person1: Person;

person1 = {
    name: 'Max',
    age: 23

}


//replace
// let people1:{
//     name: string,
//     age: number
// }[];
//with 
let people1: Person[];