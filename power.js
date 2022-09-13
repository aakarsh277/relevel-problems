
function power(x, y) {
    let ans = 1;
    for (let i = 1; i <= y; i++)
        ans = ans * x;
    console.log(ans);
}

power(2, 3);
power(6, 9);