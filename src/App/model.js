import xs from'xstream';

export default intent => {
    const winMsg$ = intent.actions$
    .filter(action => 
        action.type === 'gameWon' ||
        action.type === 'reset'
    )
    .map(action => 
        action.type === 'gameWon' ? 'Game won by ' + action.payload.winningArray[0].letter : ''
    )
    .startWith('');

    return xs.combine(
        intent.gridVtree$,
        intent.controlsVtrees$,
        intent.historyVtree$,
        winMsg$
    ).map(([gridVtree, controlsVtree, history, winner]) => ({
        gridVtree,
        controlsVtree,
        history,
        winner
    }));
}