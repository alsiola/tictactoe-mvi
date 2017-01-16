import intent from './intent';
import model from './model';
import view from './view';

export default sources => {
    return {
        DOM: view(model(intent(sources)))
    }
}
