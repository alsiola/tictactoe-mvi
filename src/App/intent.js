import Grid from './Grid/grid';
import Controls from './Controls/controls';
import xs from 'xstream';

export default sources => {
    const actionsProxy = xs.create();

    const combinedSources = Object.assign({}, sources, { actions: actionsProxy });

    const controls = Controls(combinedSources);
    const grid = Grid(combinedSources);

    const actions$ = xs.merge(
        controls.actions,
        grid.actions
    );

    actionsProxy.imitate(actions$);
    
    return {
        actions$: actions$.startWith({type: 'startup'}),
        gridVtree$: grid.DOM,
        controlsVtrees$: controls.DOM
    }
};