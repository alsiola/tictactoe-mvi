import sampleCombine from 'xstream/extra/sampleCombine';
import * as actionCreators from './actionCreators';

export default sources => {
    const { DOM, actions } = sources;

    const clickedSquares$ = actions
    .filter(action =>
        action.type === 'squareClick' ||
        action.type === 'reset'
    )
    .fold((clickedSquares, action) => (
        action.type === 'squareClick' ? [...clickedSquares, action.payload.number] : []
    ), [])
    .startWith([]);

    const squareActions = DOM
    .select('.square')
    .events('click')
    .compose(
        sampleCombine(clickedSquares$)
    )
    .map(([click, clickedSquares]) => ({
        clickedSquares,
        action: actionCreators.squareClick(sources.props.number, clickedSquares.length % 2 === 0 ? 'O' : 'X')
    }))
    .filter(item => 
        !item.clickedSquares.includes(item.action.payload.number)
    ).map(item => 
        item.action
    );
    
    return {
        squareActions,
        gridActions: actions
    }
}