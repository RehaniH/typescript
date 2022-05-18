//array type
var hobbies;
hobbies = ["stamp collecting", "boat riding", "reading", "bing watching"];
//object type
var person;
person = {
    name: "Himasha",
    age: 24
};
//all properties should be present according to the mentioned type
// person ={
//     isEmployee: true
// }
//array of objects
var people;
people = [{
        name: 'Himasha', age: 24
    }, {
        name: 'Sasha', age: 12
    }
];
function getComplexTypes() {
    var htmlContent = "<h3>Complex Types </h3>";
    document.getElementById("complex").innerHTML += htmlContent;
    var types = "Hobbies: " + hobbies + "</br>";
    types += "People: " + "</br>";
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var p = people_1[_i];
        types += "name: " + p.name + ", age: " + p.age + "</br>";
    }
    document.getElementById("complex").innerHTML += types;
}
