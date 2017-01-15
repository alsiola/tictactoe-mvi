import {html} from 'snabbdom-jsx';

export default model => {
    return model.map(state =>
        <div>
            {state}
        </div>
    );
}