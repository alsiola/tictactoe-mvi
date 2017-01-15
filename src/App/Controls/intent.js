import * as actionCreators from './actionCreators';

export default sources => {
    const resetActions$ = sources.DOM
    .select('.resetButton')
    .events('click')
    .mapTo(
        actionCreators.reset()
    );

    return {
        resetActions$
    }
}