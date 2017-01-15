import {html} from 'snabbdom-jsx';
import './square.css';

export default model => {
    return model.map(state =>
        <button className={state.className}>{state.letter}</button>
    )
}