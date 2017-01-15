import xs from'xstream';
import checkForWinner from './Utils/checkForWinner';

export default intent => {
    const winner$ = intent.actions$
    .filter(action =>
        action.type === 'squareClick' ||
        action.type === 'reset'
    )
    .fold((clickedSquares, action) => (
        action.type === 'squareClick' ? [...clickedSquares, action.payload] : []
    ), [])
    .startWith([])
    .map(clickedSquares => 
        checkForWinner(clickedSquares).length > 0 ? 'Winner!' : ''
    );


    return xs.combine(
        intent.gridVtree$,
        intent.controlsVtrees$,
        winner$
    ).map(([gridVtree, controlsVtree, winner]) => ({
        gridVtree,
        controlsVtree,
        winner
    }));
}