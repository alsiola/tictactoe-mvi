const winningStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

export default squares => {
    for(let state of winningStates) {
        const [a,b,c] = state;
        const theseSquares = squares.filter(square => state.includes(square.number));
        if(theseSquares.length === 3 && theseSquares.every(square => square.letter === theseSquares[0].letter)) {
          return state;
        }
    }
    return [];
}