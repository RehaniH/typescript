//utility function
function insertAtTheBeginning<T>(array:T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtTheBeginning(demoArray, -1);
//updatedArray[0].split(','); generates error as number type is inferred on the updatedArray
const stringArray = insertAtTheBeginning(['b', 'c', 'd'], 'a');
const booleanArray = insertAtTheBeginning([false, true, false], true);