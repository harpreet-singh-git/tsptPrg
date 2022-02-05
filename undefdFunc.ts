// function generateError(messgae: string, errCode: number) {
//     throw {
//         messgae: messgae, errCode: errCode
//     }
// }

// generateError('An err', 404);

function add(n1: number, n2: number) {
    return n1 + n2;
}

function PntRes(num: number): void {
    console.log("res", num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    console.log(n1);
    const result = n1 + n2;
    cb(result);
}

let combineValues: unknown;

combineValues = add;

// combineValues = 3;

console.log("combineValues", combineValues(3, 3));

PntRes(add(5, 13));

addAndHandle(10, 20, (result) => {
    console.log(result);
});