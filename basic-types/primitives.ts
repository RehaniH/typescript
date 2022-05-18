//number type
let age: number;
age = 24;

//string type
let studentName: string;
studentName="Himasha";

//boolean type
let isInstructor: boolean;
isInstructor = true;

//type inference
let platform = "github";
//platform = 12; generates error due to type inference

function getPrimitiveTypes(){

    let h3 = document.createElement("h3");
    h3.innerHTML = "Primitives";
    document.getElementById("primitives").appendChild(h3);

    let para1 = document.createElement("p");
    para1.innerHTML = "Age: " + age;
    document.getElementById("primitives").appendChild(para1);

    let para2 = document.createElement("p");
    para2.innerHTML = "Name: " + studentName;
    document.getElementById("primitives").appendChild(para2);

    let para3 = document.createElement("p");
    para3.innerHTML = "Is Instructor: " + isInstructor;
    document.getElementById("primitives").appendChild(para3);

    let para4 = document.createElement("p");
    para4.innerHTML = "Type Inference, platform: " + platform;
    document.getElementById("primitives").appendChild(para4);
}

