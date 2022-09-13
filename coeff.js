function pact(a) {
    ans = 1;
    for (let i = a; i >= 1; i--) {
        ans = ans * i;
    }
    return (ans);
}


pact(3);

function fact(m, n) {
    let ans = (pact(m)) / (pact(n) * pact(m - n));
    console.log(ans);
}
fact(6, 3);