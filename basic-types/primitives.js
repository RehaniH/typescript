//number type
var age;
age = 24;
//string type
var studentName;
studentName = "Himasha";
//boolean type
var isInstructor;
isInstructor = true;
//type inference
var platform = "github";
//platform = 12; generates error due to type inference
function getPrimitiveTypes() {
    var h3 = document.createElement("h3");
    h3.innerHTML = "Primitives";
    document.getElementById("primitives").appendChild(h3);
    var para1 = document.createElement("p");
    para1.innerHTML = "Age: " + age;
    document.getElementById("primitives").appendChild(para1);
    var para2 = document.createElement("p");
    para2.innerHTML = "Name: " + studentName;
    document.getElementById("primitives").appendChild(para2);
    var para3 = document.createElement("p");
    para3.innerHTML = "Is Instructor: " + isInstructor;
    document.getElementById("primitives").appendChild(para3);
    var para4 = document.createElement("p");
    para4.innerHTML = "Type Inference, platform: " + platform;
    document.getElementById("primitives").appendChild(para4);
}
