//create array of order 4x5
//means rows=4,columns=5




let newarr = new Array(4);
for (let i = 0; i < 4; i++) {
    newarr[i] = new Array(5);
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        newarr[i][j] = 3;

    }
}

console.log(newarr);
