export function add(a,b) {
    return a+b;
}


export function multiply(a,b) {
    return a*b;
}

export function square(a) {
    return a*a;
}


export function sumList(arr) {
    return arr.reduce((acc, elem) => acc+elem,0);
}


export function diffList(arr) {
    return arr.reduce((acc, elem) => acc-elem,0);
}


export function prodList(arr) {
    return arr.reduce((acc, elem) => acc*elem,0);
}