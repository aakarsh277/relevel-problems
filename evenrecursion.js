function even(i, n) {
    if (i < n) {
        console.log(i);
        even(i + 2, n);
    }
    else {
        console.log("condition not satified");
    }
}

even(2, 50);