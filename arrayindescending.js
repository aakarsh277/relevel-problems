let temparr = [31, 54, 76, 23, 991, 112, 2, 3, 552]//to achieve[991,552,112,76,54,31,3,2]

function sortdes(arr) {
    for (let i = 0; i <= temparr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
        }


    }
    for (let i = 0; i < temparr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) return sortdes(arr);
    }
    return arr;
}
console.log(sortdes(temparr));