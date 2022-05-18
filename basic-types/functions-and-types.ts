function add(a: number, b: number){
    return a + b; //return type is infered as number automatically
}

function concatenateVars(val1:string, val2: number): string | number{
    return val2 + val1;
}

function printOutput(value: any){ //return type infered as void
    console.log(value);
}