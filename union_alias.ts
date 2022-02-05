type Combinable = string | number;
type ResConversion = "as-text" | "as-number";

function sum(
    inp1: Combinable,
    inp2: Combinable,
    resConversion: ResConversion
) {
    let result
    if (typeof inp1 === "number" && typeof inp2 === "number" || resConversion === "as-number") {
        result = +inp1 + +inp2;
    } else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}

