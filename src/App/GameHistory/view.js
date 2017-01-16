import { html } from 'snabbdom-jsx';

export default model => {
    return model
    .map(state =>
        <ul className='list-group'>
        {state.map((hxitem, i) =>
            <li className='list-group-item'>Step {i+1}: {hxitem.letter} played in square {hxitem.number}</li>
        )}
        </ul>
    );
}