function performDanceMove(moveName, moveReps, hasFlair) {
    console.log(`I do the ${moveName} ${moveReps} times!`);
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}
// Please provide a type annotation for the danceMoves array that will ensure compatibility with the performDanceMove() function.
let danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
/*
Perform the whole dance from start to finish by looping over the danceMoves array in whatever way you like, but make sure to use JavaScript’s spread syntax within performDanceMove().

It’s time to see the results of the dance! Run tsc to transpile the code to JavaScript and then run it with node index.js.
*/
danceMoves.forEach(move => performDanceMove(...move));
