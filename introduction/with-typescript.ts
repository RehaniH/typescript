function addNumbers(a:number, b:number){
    return a + b;
}

function tsClick(){
    document.getElementById("ts-result").innerHTML = addNumbers(3, 5)+"";
}