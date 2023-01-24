
// calling function from another function

function cutFruitPieces(fruit, pieces) {
    return fruit * pieces;
}

function fruitProcessor(numberOfApples, numberOfOranges) {
    const applePieces = cutFruitPieces(numberOfApples, 4);
    const orangePieces = cutFruitPieces(numberOfOranges, 8);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 5));