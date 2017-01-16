import {html} from 'snabbdom-jsx';
import './grid.css';

export default model => {
    return model.map(state =>
        <div className="inline-block-center">
            {state}
        </div>
    );
}