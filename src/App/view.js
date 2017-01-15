import { html } from 'snabbdom-jsx';

export default model => {
    return model
    .map(state => (
        <div>
            {state.gridVtree}
            {state.controlsVtree}
            <div>{state.winner}</div>
        </div>
    ));
} 