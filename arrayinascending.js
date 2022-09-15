let temparr = [31, 54, 76, 23, 991, 112, 2, 3, 552]
function sortaes(arr) {
    for (let i = 0; i <= temparr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
        }
    }
    for (let i = 0; i <= temparr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return sortaes(arr);
    }
    return arr;
}
console.log(sortaes(temparr));
