function fact(n) {
    ans = 1;
    for (let i = n; i >= 1; i--) {
        ans = ans * i
    }
    console.log(ans);
}

fact(4);    