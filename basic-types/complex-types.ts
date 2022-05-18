//array type

let hobbies: string[];
hobbies = ["stamp collecting", "boat riding", "reading", "bing watching"];


//object type

let person: {
    name: string,
    age: number,
    // isEmployee: boolean
};

person = {
    name: "Himasha",
    age: 24
}

//all properties should be present according to the mentioned type
// person ={
//     isEmployee: true
// }

//array of objects
let people: {
    name: string,
    age: number
}[];

people = [{
    name: 'Himasha', age: 24
}, {
    name: 'Sasha', age: 12

}
]

function getComplexTypes(){

    let htmlContent = "<h3>Complex Types </h3>"
    document.getElementById("complex").innerHTML += htmlContent;

    let types = "Hobbies: " + hobbies + "</br>";
    types += "People: " + "</br>";

    for(let p of people){
        types += "name: " + p.name +", age: " + p.age + "</br>";
    }

    document.getElementById("complex").innerHTML += types;
}