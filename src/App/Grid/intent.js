import xs from 'xstream';
import sampleCombine from 'xstream/extra/sampleCombine';
import * as actionCreators from './actionCreators';
import Collection from '@cycle/collection';
import Square from '../Square/square';

export default sources => {

    const squareSources$ = xs.of([0,1,2,3,4,5,6,7,8].map(i => ({
        props: {
            number: i
        }
    })));

    const squares$ = Collection(Square, sources, squareSources$);

    const squareActions$ = Collection.merge(squares$, square => square.actions);

    const squareFillsProxy$ = xs.create();
    
    const clickedSquares$ = sources.actions
    .filter(action =>
        action.type === 'squareFill' ||
        action.type === 'reset'
    )
    .fold((clickedSquares, action) => (
        action.type === 'squareFill' ? [...clickedSquares, action.payload.number] : []
    ), []);

    const squareFills$ = squareActions$
    .filter(action =>
        action.type === 'squareClick'
    )
    .compose(
        sampleCombine(clickedSquares$)
    )
    .filter(([action, clickedSquares]) => 
        !clickedSquares.includes(action.payload.number)
    )
    .map(([action, clickedSquares]) => 
        actionCreators.squareFill(action.payload.number, clickedSquares.length % 2 === 0 ? 'O' : 'X')
    );

    squareFillsProxy$.imitate(squareFills$);

    return {
        squareVtrees$: Collection.pluck(squares$, square => square.DOM),
        actions$: xs.merge(
            squareActions$,
            squareFills$
        )
    }
}