import isolate from '@cycle/isolate';
import intent from './intent';
import model from './model';
import view from './view';

const main = sources => {
    return {
        DOM: view(model(sources))
    }
}

export default sources => isolate(main)(sources);