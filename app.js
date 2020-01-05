const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
console.log(diagonalDifference(arr));

function diagonalDifference(arr) {
    let diagonal1 = 0,
        diagonal2 = 0;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr.length; col++) {
            if (row === col) {
                diagonal1 += arr[row][col];
            }
            if (row + col === arr.length - 1) {
                diagonal2 += arr[row][col];
            }
        }
    }
    return Math.abs(diagonal1 - diagonal2);
}
