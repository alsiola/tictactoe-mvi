import xs from 'xstream';
import Collection from '@cycle/collection';
import Square from '../Square/square';

export default sources => {    
    const squareSources$ = xs.of([0,1,2,3,4,5,6,7,8].map(i => ({
            DOM: sources.DOM,
            props: {
              number: i
            }
        })));

    const squares$ = Collection(Square, sources, squareSources$);

    return {
        squareVtrees$: Collection.pluck(squares$, square => square.DOM),
        actions$: Collection.merge(squares$, square => square.actions)
    }
}