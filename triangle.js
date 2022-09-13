function chk(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        console.log("figure is triangle")
    }
    else {
        console.log("fig is not triangle")
    }
}

chk(7, 10, 5);
chk(3, 4, 8);