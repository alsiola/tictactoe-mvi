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
    return winningStates
    .map(state => 
        squares
        .filter(square => 
            state.includes(square.number)
        )
    ).filter(squareLine =>
        squareLine.length === 3 &&
        squareLine.every(square =>
            square.letter === squareLine[0].letter
        )
    )
    .reduce((winline, squareLine) =>
        [...winline, ...squareLine]
    ,[]);
}