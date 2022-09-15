function arrpop(arr) {
    arr.length = arr.length - 1;
    return arr;
}
let temp1 = [1, 2, 4, 6, 8, 3];
console.log(arrpop(temp1));


