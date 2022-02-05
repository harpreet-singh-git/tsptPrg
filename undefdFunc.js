// function generateError(messgae: string, errCode: number) {
//     throw {
//         messgae: messgae, errCode: errCode
//     }
// }
// generateError('An err', 404);
function add(n1, n2) {
    return n1 + n2;
}
function PntRes(num) {
    console.log("res", num);
}
var combineValues;
combineValues = add;
// combineValues = 3;
console.log("combineValues", combineValues(3, 3));
PntRes(add(5, 13));
