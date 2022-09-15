let arr = [34, 47, 56, 42, 32, 81, 68, 79, 52];
let emptarr = [];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) emptarr.push(arr[i]);
}
console.log(emptarr);