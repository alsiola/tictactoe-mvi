import {html} from 'snabbdom-jsx';
import xs from 'xstream';

export default model => {
    return xs.of(
        <div>
            <button className="resetButton">Reset</button>
        </div>
    );
}