import isolate from '@cycle/isolate';
import intent from './intent';
import model from './model';
import view from './view';

const main = sources => {
    const intent$ = intent(sources);

    return {
        DOM: view(model(intent$)),
        actions: intent$.resetActions$
    }
}

export default sources => isolate(main)(sources);