import Grid from './Grid/grid';
import Controls from './Controls/controls';
import xs from 'xstream';
import * as actionCreators from './actionCreators';
import checkForWinner from './Utils/checkForWinner';

export default sources => {
    const actionsProxy$ = xs.create();

    const combinedSources = Object.assign({}, sources, { actions: actionsProxy$ });

    const controls = Controls(combinedSources);
    const grid = Grid(combinedSources);

    const winner$ = xs.merge(
        controls.actions,
        grid.actions
    )
    .filter(action =>
        action.type === 'squareFill' ||
        action.type === 'reset'
    )
    .fold((clickedSquares, action) => (
        action.type === 'squareFill' ? [...clickedSquares, action.payload] : []
    ), [])
    .startWith([])
    .map(clickedSquares => 
        checkForWinner(clickedSquares)
    )
    .filter(winningArray =>
        winningArray.length > 0
    )
    .map(winningArray => 
        actionCreators.gameWon(winningArray)
    );

    const actions$ = xs.merge(
        grid.actions,
        controls.actions,
        winner$
    );

    actionsProxy$.imitate(actions$);
    
    return {
        actions$: actions$.startWith({type: 'startup'}),
        gridVtree$: grid.DOM,
        controlsVtrees$: controls.DOM
    }
};