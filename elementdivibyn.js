let temparr = [32, 34, 56, 21, 49, 11, 34, 30];
function div(arr, n) {
    for (let i = 0; i < temparr.length; i++) {
        if (arr[i] % n == 0) {
            console.log(arr[i]);
        }
    }
}


div(temparr, 6);