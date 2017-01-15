import * as actionCreators from './actionCreators';

export default sources => {
    const { DOM, actions } = sources;

    const squareActions = DOM
    .select('.square')
    .events('click')
    .map(e => (
        actionCreators.squareClick(sources.props.number)
    ));
    
    return {
        squareActions,
        gridActions: actions
    }
}