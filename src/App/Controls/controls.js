import {html} from 'snabbdom-jsx';
import xs from 'xstream';
import * as actionCreators from './actionCreators';
import isolate from '@cycle/isolate';

const main = sources => {
    const resetActions$ = sources.DOM
    .select('.resetButton')
    .events('click')
    .mapTo(actionCreators.reset());

    const vtree$ = xs.of(
        <div>
            <button className="resetButton">Reset</button>
        </div>
    );

    return {
        DOM: vtree$,
        actions: xs.merge(
            resetActions$
        )
    }
}

export default sources => isolate(main)(sources);